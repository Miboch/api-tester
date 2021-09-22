import {EndpointModel} from './endpoint.model';

export interface ApiModel {
  id: string;
  apiName: string;
  baseUrl: string;
  endpoints: EndpointModel[];
}
