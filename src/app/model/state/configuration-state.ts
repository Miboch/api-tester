import {ApiModel} from '../api.model';
import {EndpointModel} from '../endpoint.model';

export interface ConfigurationState {
  apiList: ApiModel[];
  endpoints: EndpointModel[];
  apiIds: string[];
}
