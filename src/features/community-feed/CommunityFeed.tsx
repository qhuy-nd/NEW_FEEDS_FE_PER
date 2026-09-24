"use client";

import { useEffect } from "react";
import CommunityComposer from "../../molecules/community-composer";
import CommunityPostCard from "../../molecules/community-post-card";
import CommunityRightRail from "../../molecules/community-right-rail";
import CommunitySidebar from "../../molecules/community-sidebar";
import CommunityTopbar from "../../molecules/community-topbar";
import Typography from "../../atoms/typography";
import { useAuth } from "../../context/auth/useAuth";
import { useApiResult } from "../../hook/api/useApiResult";
import {
  communityFeedCoursesSvcCaller,
  communityFeedJoinedGroupsSvcCaller,
  communityFeedPinnedGroupsSvcCaller,
  communityFeedPostsSvcCaller,
  communityFeedWelcomeTitleSvcCaller,
} from "../../services/community-feed/community-feed.svc";

const CommunityFeed = () => {
  const { user, logout, isChecking, isAuthenticated } = useAuth();
  const tweetsResult = useApiResult(communityFeedPostsSvcCaller);
  const pinnedGroupsResult = useApiResult(communityFeedPinnedGroupsSvcCaller);
  const joinedGroupsResult = useApiResult(communityFeedJoinedGroupsSvcCaller);
  const coursesResult = useApiResult(communityFeedCoursesSvcCaller);
  const welcomeTitleResult = useApiResult(communityFeedWelcomeTitleSvcCaller);

  useEffect(() => {
    if (isChecking || !isAuthenticated) return;

    void communityFeedPostsSvcCaller.execute({ page: 1, limit: 8 }, { toast: false });
    void communityFeedPinnedGroupsSvcCaller.execute({ limit: 100, sort: "position" }, { toast: false });
    void communityFeedJoinedGroupsSvcCaller.execute({ page: 1, limit: 8 }, { toast: false });
    void communityFeedCoursesSvcCaller.execute({ page: 1, limit: 4 }, { toast: false });
    void communityFeedWelcomeTitleSvcCaller.execute({ page: 1, limit: 1, sort: "-created_at" }, { toast: false });
  }, [isAuthenticated, isChecking]);

  const posts = tweetsResult.data ?? [];
  const pinnedGroups = pinnedGroupsResult.data ?? [];
  const joinedGroups = joinedGroupsResult.data ?? [];
  const courses = coursesResult.data ?? [];
  const welcomeTitle = welcomeTitleResult.data ?? undefined;

  const featuredPost = posts[0];
  const feedPosts = posts.slice(1);
  const latestPosts = posts.slice(0, 4);
  const popularPosts = [...posts]
    .sort((left, right) => right.likeCount - left.likeCount)
    .slice(0, 3);

  return (
    <div className="community-feed">
      <CommunityTopbar
        userName={user?.username}
        onLogout={logout}
      />

      <main className="community-feed__body">
        <CommunitySidebar
          pinnedGroups={pinnedGroups}
          joinedGroups={joinedGroups}
          isLoading={pinnedGroupsResult.isLoading || joinedGroupsResult.isLoading}
        />

        <section className="community-feed__main" aria-label="Bảng tin cộng đồng">
          <CommunityComposer userName={user?.username} />

          {tweetsResult.isLoading && (
            <div className="community-feed__state">
              <Typography as="p">Đang tải bảng tin...</Typography>
            </div>
          )}

          {tweetsResult.isError && (
            <div className="community-feed__state">
              <Typography as="p">Không tải được bảng tin: {tweetsResult.error}</Typography>
            </div>
          )}

          {!tweetsResult.isLoading && !tweetsResult.isError && featuredPost && (
            <CommunityPostCard post={featuredPost} featured />
          )}

          {!tweetsResult.isLoading && !tweetsResult.isError && feedPosts.map((post) => (
            <CommunityPostCard key={post.id} post={post} />
          ))}
        </section>

        <CommunityRightRail
          latestPosts={latestPosts}
          popularPosts={popularPosts}
          courses={courses}
          welcomeTitle={welcomeTitle}
        />
      </main>
    </div>
  );
};

export default CommunityFeed;
