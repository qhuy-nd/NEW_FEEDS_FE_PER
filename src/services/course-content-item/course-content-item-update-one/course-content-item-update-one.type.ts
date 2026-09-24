export interface ICourseContentItemUpdateOneRequest {
  id: string;
  position?: number;
  course?: string[];
  title?: string;
  type?: "Lesson" | "Exam";
  chapters?: string[];
  lesson_type?: "Text" | "File" | "Video";
  status?: "Active";
  time_learning?: number;
  lesson_content?: string;
  video_file?: string;
  video_url?: string;
}

export type ICourseContentItemUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
