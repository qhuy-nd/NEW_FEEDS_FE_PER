import Avatar from "../../atoms/avatar";
import Typography from "../../atoms/typography";
import type { CommunityPost } from "../community-post-card";

export type CommunityCourseItem = {
  id: string;
  title: string;
};

export type CommunityRightRailProps = {
  latestPosts: CommunityPost[];
  popularPosts: CommunityPost[];
  courses: CommunityCourseItem[];
  welcomeTitle?: string;
};

const CommunityRightRail = ({
  latestPosts,
  popularPosts,
  courses,
  welcomeTitle,
}: CommunityRightRailProps) => {
  return (
    <aside className="community-right-rail">
      <section className="community-right-rail__welcome">
        <div>
          <Typography as="h3" weight="bold" className="community-right-rail__welcome-title">
            {welcomeTitle ?? "Chào mừng nhân viên mới đến với mạng nội bộ"}
          </Typography>
          <Typography as="span" weight="bold" className="community-right-rail__welcome-brand">
            MangoLearn
          </Typography>
        </div>
        <Avatar fallback="MangoLearn" size="xl" shape="circle" />
      </section>

      <section className="community-right-rail__card">
        <div className="community-right-rail__tabs">
          <Typography as="span" weight="bold" className="community-right-rail__tab community-right-rail__tab--active">
            Tin mới
          </Typography>
          <Typography as="span" weight="bold" className="community-right-rail__tab">
            Đọc nhiều
          </Typography>
        </div>

        <ListItems posts={latestPosts} />
      </section>

      <section className="community-right-rail__card">
        <Typography as="h3" weight="bold" className="community-right-rail__section-title">
          Xem nhiều
        </Typography>
        {popularPosts.length ? <ListItems posts={popularPosts} compact /> : (
          <CourseItems courses={courses} />
        )}
      </section>
    </aside>
  );
};

const ListItems = ({ posts, compact = false }: { posts: CommunityPost[]; compact?: boolean }) => (
  <div className="community-right-rail__list">
    {posts.map((post) => (
      <article key={post.id} className="community-right-rail__item">
        {!compact && (
          <Typography as="small" className="community-right-rail__item-meta">
            {post.groupName}
          </Typography>
        )}
        <Typography as="h4" weight="bold" className="community-right-rail__item-title">
          {post.title}
        </Typography>
      </article>
    ))}
  </div>
);

const CourseItems = ({ courses }: { courses: CommunityCourseItem[] }) => (
  <div className="community-right-rail__list">
    {courses.map((course) => (
      <article key={course.id} className="community-right-rail__item">
        <Typography as="h4" weight="bold" className="community-right-rail__item-title">
          {course.title}
        </Typography>
      </article>
    ))}
  </div>
);

export default CommunityRightRail;
