import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class AppSettings {
    public readonly api_url: string;

    constructor() {
        this.api_url = environment.api_url;
    }
  }