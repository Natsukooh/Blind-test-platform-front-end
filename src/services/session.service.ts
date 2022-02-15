import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class SessionService
{

  private admin_logged : boolean;

  constructor()
  {
    this.admin_logged = false;
  }

  public admin_login_try(password: string) : boolean
  {
    if (password === "bdj")
    {
      this.admin_logged = true;
      return true;
    }
    else
    {
      return false;
    }
  }

  public is_admin_logged() : boolean
  {
    return this.admin_logged;
  }

}
