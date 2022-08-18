export type YoutubeThumbnailModel = {
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
