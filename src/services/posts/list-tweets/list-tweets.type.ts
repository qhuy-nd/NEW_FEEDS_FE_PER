export interface IListTweetsParamsRequest {
  params: {
    page: number;
    limit: number;
    order: string;
  }
}

export interface IListTweetsFileMetadata {
  alt: string;
  originalName: string;
  tenantId: string;
}

export interface IListTweetsFile {
  _id: string;
  mimeType: string;
  bucketName: string;
  created_at: string;
  updated_at: string;
  lastModified: string;
  contentDisposition: string;
  is_root: boolean;
  folder: string;
  metadata: IListTweetsFileMetadata;
  size: number;
  type: string;
  fileName: string;
  name: string;
  tenant_id: string;
  created_by: string;
  etag: string;
  path: string;
}

export type IListTweetsPermissionRole = "owner" | "manager" | "member";

export interface IListTweetsGroupPermissions {
  post_create: IListTweetsPermissionRole[];
  group_info_update: IListTweetsPermissionRole[];
  group_member_update: IListTweetsPermissionRole[];
  group_member_add: IListTweetsPermissionRole[];
  group_member_remove: IListTweetsPermissionRole[];
  group_category_create: IListTweetsPermissionRole[];
  group_category_update: IListTweetsPermissionRole[];
  group_category_delete: IListTweetsPermissionRole[];
  group_menu_item_create: IListTweetsPermissionRole[];
  group_menu_item_update: IListTweetsPermissionRole[];
  group_menu_item_delete: IListTweetsPermissionRole[];
  tweet_delete: IListTweetsPermissionRole[];
  group_reports_manage: IListTweetsPermissionRole[];
  group_interface_setting_manage: IListTweetsPermissionRole[];
  tweet_store_create: IListTweetsPermissionRole[];
  tweet_store_manage: IListTweetsPermissionRole[];
  tweet_reject_create: IListTweetsPermissionRole[];
  tweet_reject_manage: IListTweetsPermissionRole[];
  tweet_waiting_create: IListTweetsPermissionRole[];
  tweet_waiting_manage: IListTweetsPermissionRole[];
  tweet_approve: IListTweetsPermissionRole[];
  tweet_approve_mode: boolean;
  tweet_edited_approve_mode: boolean;
}

export interface IListTweetsSocialGroup {
  _id: string;
  cover: string[];
  title: string;
  slug: string;
  type: string;
  status: string;
  permissions: IListTweetsGroupPermissions;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  tenant_id: string;
  collection_name: string;
  member_count: number;
  require_join_approval: boolean;
  description?: string;
  locale?: string;
  locale_id?: string;
}

export interface IListTweetsCategory {
  _id: string;
  title: string;
  slug: string;
  social_group: string[];
  position: number;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  tenant_id: string;
  collection_name: string;
  is_root: boolean;
  locale_id: string;
}

export interface IListTweetsTag {
  _id: string;
  name: string;
  slug: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  tenant_id: string;
  collection_name: string;
}

export interface IListTweetsAuthor {
  _id: string;
  full_name: string;
  username: string;
  featured_image?: IListTweetsFile;
}

export type IListTweetsType = "event" | "image" | "news" | "votes";

export interface IListTweet {
  _id: string;
  title: string;
  slug: string;
  short_description?: string;
  long_description?: string;
  social_group: IListTweetsSocialGroup;
  categories: IListTweetsCategory[];
  tag: IListTweetsTag[];
  comment_off?: boolean;
  like_off?: boolean;
  report_tweet_off?: boolean;
  report_comment_off?: boolean;
  type: IListTweetsType;
  status: string;
  tenant_id: string;
  like_count: number;
  comment_count: number;
  event_registration_count: string;
  featured_image?: IListTweetsFile;
  published_at?: string;
  created_by: IListTweetsAuthor;
  updated_by: string;
  collection_name: string;
  created_at: string;
  updated_at: string;
}

export interface IListTweetsMeta {
  current_page: number;
  last_page: number;
  total: number;
  hasMore: boolean;
}

export type IListTweetsResponse = {
  data: IListTweet[];
  meta: IListTweetsMeta;
}
