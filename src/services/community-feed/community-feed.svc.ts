import type { CommunityGroupItem } from "../../molecules/community-sidebar";
import type { CommunityPost } from "../../molecules/community-post-card";
import type { CommunityCourseItem } from "../../molecules/community-right-rail";
import { RxAxiosCaller } from "../api.svc";
import { API_COURSES_ROUTERS } from "../courses/router";
import type {
  IGetlistRequest as ICoursesGetlistRequest,
  IGetlistResponse as ICoursesGetlistResponse,
} from "../courses/getlist/getlist.type";
import { API_GROUP_ROUTERS } from "../group/router";
import type { IGetlistJoinedRequest, IGetlistJoinedResponse } from "../group/getlist-joined/getlist-joined.type";
import { API_GROUP_PIN_ROUTERS } from "../group-pin/router";
import type { IGroupPinGetlistRequest, IGroupPinGetlistResponse } from "../group-pin/group-pin-getlist/group-pin-getlist.type";
import { API_NOTIFICATION_RECORD_ROUTERS } from "../notification-record/router";
import type {
  INotificationRecordGetlistRequest,
  INotificationRecordGetlistResponse,
} from "../notification-record/notification-record-getlist/notification-record-getlist.type";
import { API_TWEET_ROUTERS } from "../tweet/router";
import type {
  IGetlistRequest as ITweetGetlistRequest,
  IGetlistResponse as ITweetGetlistResponse,
} from "../tweet/getlist/getlist.type";
import {
  mapCoursesToCommunityCourses,
  mapJoinedGroupsToCommunityGroups,
  mapNotificationsToWelcomeTitle,
  mapPinnedGroupsToCommunityGroups,
  mapTweetsToCommunityPosts,
} from "./community-feed.mapper";

class CommunityFeedPostsSvcCaller extends RxAxiosCaller<
  CommunityPost[],
  ITweetGetlistRequest,
  ITweetGetlistResponse
> {
  constructor() {
    super(API_TWEET_ROUTERS.GET.GETLIST, "GET", (raw) => mapTweetsToCommunityPosts(raw.data));
  }
}

class CommunityFeedPinnedGroupsSvcCaller extends RxAxiosCaller<
  CommunityGroupItem[],
  IGroupPinGetlistRequest,
  IGroupPinGetlistResponse
> {
  constructor() {
    super(API_GROUP_PIN_ROUTERS.GET.GROUP_PIN_GETLIST, "GET", (raw) => mapPinnedGroupsToCommunityGroups(raw.data));
  }
}

class CommunityFeedJoinedGroupsSvcCaller extends RxAxiosCaller<
  CommunityGroupItem[],
  IGetlistJoinedRequest,
  IGetlistJoinedResponse
> {
  constructor() {
    super(API_GROUP_ROUTERS.GET.GETLIST_JOINED, "GET", (raw) => mapJoinedGroupsToCommunityGroups(raw.data));
  }
}

class CommunityFeedCoursesSvcCaller extends RxAxiosCaller<
  CommunityCourseItem[],
  ICoursesGetlistRequest,
  ICoursesGetlistResponse
> {
  constructor() {
    super(API_COURSES_ROUTERS.GET.GETLIST, "GET", (raw) => mapCoursesToCommunityCourses(raw.data));
  }
}

class CommunityFeedWelcomeTitleSvcCaller extends RxAxiosCaller<
  string | undefined,
  INotificationRecordGetlistRequest,
  INotificationRecordGetlistResponse
> {
  constructor() {
    super(API_NOTIFICATION_RECORD_ROUTERS.GET.NOTIFICATION_RECORD_GETLIST, "GET", (raw) => mapNotificationsToWelcomeTitle(raw.data));
  }
}

export const communityFeedPostsSvcCaller = new CommunityFeedPostsSvcCaller();
export const communityFeedPinnedGroupsSvcCaller = new CommunityFeedPinnedGroupsSvcCaller();
export const communityFeedJoinedGroupsSvcCaller = new CommunityFeedJoinedGroupsSvcCaller();
export const communityFeedCoursesSvcCaller = new CommunityFeedCoursesSvcCaller();
export const communityFeedWelcomeTitleSvcCaller = new CommunityFeedWelcomeTitleSvcCaller();
