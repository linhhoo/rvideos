export type YoutubeThumbnailModel = {
  default: {
    width: number;
    height: number;
    url: string;
  };
  standard: {
    width: number;
    height: number;
    url: string;
  };
};

export type YoutubeVideoSnippetModel = {
  title: string;
  description: string;
  thumbnails: YoutubeThumbnailModel;
};

export type ShareVideoModel = {
  videoUrl: string;
};

export type ShareVideoInputModel = {
  url: string;
  title: string;
  description: string;
  thumb: string;
  blur_thumb: string;
  user_id?: string;
  user_name?: string;
};

export type VideoModel = ShareVideoInputModel & {
  id: string;
};
