import { defHttp } from 'fe-ent-core/lib/utils/http/axios';
import { AreaModel, AreaParams } from '../model/area-model';

enum Api {
  AREA_RECORD = '/cascader/getAreaRecord',
}

export const areaRecord = (data: AreaParams) =>
  defHttp.post<AreaModel>({ url: Api.AREA_RECORD, data });
