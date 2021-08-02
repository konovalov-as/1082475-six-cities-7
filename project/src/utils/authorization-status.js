import {AuthorizationStatus} from '../const';

export const isUnauthorized = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;
