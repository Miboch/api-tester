import {RequestTypeEnum} from './request-type.enum';

// Query Params with a type string|integer etc, should be a random value. ?foo=string&bar=integer&id=10
export interface EndpointModel {
  requestType: RequestTypeEnum;
  endpointName: string;
  apiId: string;
  uri: string;
  defaultBody: string; // TODO: Figure out a better way to handle default JSON structuring for requests.
}
