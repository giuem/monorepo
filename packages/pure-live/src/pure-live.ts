import axios, { AxiosInstance } from 'axios';

import {
  API,
  GetPlayUrlRequest,
  GetPlayUrlResponse,
  GetRoomInfoRequest,
  GetRoomInfoResponse,
  GetRoomInfosRequest,
  GetRoomInfosResponse,
  GetVersionResponse,
  RoomInfo,
} from './api';

export type PureLiveOptions = {
  baseURL: string;
};

export class PureLive {
  private readonly options: PureLiveOptions;
  private readonly axios: AxiosInstance;

  constructor(options: PureLiveOptions) {
    this.options = options;

    this.axios = axios.create({
      baseURL: options.baseURL,
    });
  }

  async getVersion(): Promise<GetVersionResponse> {
    const res = await this.axios.get(API.GET_VERSION);
    return res.data;
  }

  async getRoomInfo(data: GetRoomInfoRequest): Promise<GetRoomInfoResponse> {
    const res = await this.axios.get(API.GET_ROOM_INFO, {
      params: data,
    });
    return res.data;
  }

  async getRoomInfos(data: GetRoomInfosRequest): Promise<GetRoomInfosResponse> {
    const res = await this.axios.post(
      API.GET_ROOM_INFOS,
      data.map((item, index) => ({
        id: index,
        ...item,
      }))
    );
    return {
      ...res.data,
      data: Object.values(res.data.data as Record<string, RoomInfo>),
    };
  }

  /**
   * 这里 room 需要通过 getRoomInfo 获取真实的房间号
   * @param data
   * @returns
   */
  async getPlayUrl(data: GetPlayUrlRequest): Promise<GetPlayUrlResponse> {
    const res = await this.axios.get<GetPlayUrlResponse>(API.GET_PLAY_URL, {
      params: data,
    });

    let origin = res.data.data.origin;
    if (res.data.data.cors) {
      const search = new URLSearchParams({
        url: origin,
        type: res.data.data.type,
      });
      origin = `${this.options.baseURL}/api/v1/live/play?${search.toString()}`;
    }

    return {
      ...res.data,
      data: {
        ...res.data.data,
        origin,
      },
    };
  }
}
