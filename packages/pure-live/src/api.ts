export const enum API {
  GET_VERSION = '/api/version',
  GET_ROOM_INFO = '/api/v1/live/room_info',
  GET_ROOM_INFOS = '/api/v1/live/room_infos',
  GET_PLAY_URL = '/api/v1/live/play_url',
}

export const enum Platform {
  bilibili = 'bilibili',
  huya = 'huya',
  douyu = 'douyu',
}

export const enum RoomStatus {
  offline = 0,
  online = 1,
}

export type RoomQuery = {
  plat: Platform;
  room: string;
};

export type RoomInfo = {
  /**
   * 开播情况
   */
  status: RoomStatus;
  /**
   * 真实房间号
   */
  room: string;
  /**
   * 主播名
   */
  upper: string;
  /**
   * 直播间链接
   */
  link: string;
  /**
   * 直播间标题
   */
  title: string;
};

type BaseResponse<Data> = {
  code: number;
  msg: string;
  data: Data;
};

export type GetVersionResponse = BaseResponse<{
  runtime: string;
  version: string;
}>;

export type GetRoomInfoRequest = RoomQuery;

export type GetRoomInfoResponse = BaseResponse<RoomInfo>;

export type GetRoomInfosRequest = Array<RoomQuery>;

export type GetRoomInfosResponse = BaseResponse<RoomInfo[]>;

export type GetPlayUrlRequest = RoomQuery;

export type GetPlayUrlResponse = BaseResponse<{
  /**
   * 清晰度
   */
  qn: number;
  /**
   * 清晰度描述
   */
  desc: string;
  /**
   * 直播流地址
   */
  origin: string;
  /**
   * 是否有跨域限制 true:有 false:无 若为true必须通过本地流量转发才能播放，若为false直接播放或本地转发均可
   */
  cors: boolean;

  /**
   * 直播流编码格式
   */
  type: string;
}>;
