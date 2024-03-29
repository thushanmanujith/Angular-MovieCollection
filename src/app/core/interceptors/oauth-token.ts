import * as moment from 'moment';
import { OAuthTokenMetadata } from './oauth-token-metadata';

export class OAuthToken extends OAuthTokenMetadata {
    protected _lastModifiedOn!: moment.Moment;
    protected _version: number;
    protected _exp!: number;

    public get lastModifiedOn(): moment.Moment {
        return  this._lastModifiedOn;
    }

    public get version(): number {
        return this._version;
    }

    public get exp(): number {
        return  this._exp;
    }

    public get expiresOn(): moment.Moment {
        return this.lastModifiedOn.clone().add(this.expiresIn, OAuthToken.EXPIRY_DURATION_UNIT);
    }

    static JSONParseReviver(key: any, value: any): any {
       return (!value) ? value :
       (key === '_lastModifiedOn') ? moment(value) : value;
    }

    public get isValid(): boolean {
        return !!this.expiresOn && this.expiresOn > moment();
    }

    constructor(version: number = 0, exp: number) {
        super();
        this.empty();
        this._version = version;
        this._exp = exp;
    }

    /* Token from server has to be updated via this function only. */
    public update(newValues: OAuthTokenMetadata, version?: number): void {
        (!newValues) ? this.empty() : Object.assign(this, newValues);
        /* backsetting lastModifiedAt by a small margin to prevent, token being valid even its actual time has expired...  */
        this._lastModifiedOn = moment().add(-15, 'seconds');
        this._version = version || 0;
    }
}
