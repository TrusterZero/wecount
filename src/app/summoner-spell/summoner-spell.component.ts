import {AfterViewInit, Component, Input, OnInit} from "@angular/core";
import {interval} from "rxjs/internal/observable/interval";
import {timer} from "rxjs/internal/observable/timer";
import {scan} from "rxjs/internal/operators/scan";
import {take} from "rxjs/internal/operators/take";
import {takeUntil} from "rxjs/internal/operators/takeUntil";
import {Subject} from "rxjs/internal/Subject";
import {Subscription} from "rxjs/internal/Subscription";
import {IbolToggleComponent} from "../ibol-toggle/ibol-toggle.component";
import {Spell} from "../../../functions/src/models/Spell";


@Component({
  selector: "app-summoner-spell",
  templateUrl: "./summoner-spell.component.html",
  styleUrls: ["./summoner-spell.component.scss"],
})
export class SummonerSpellComponent implements AfterViewInit {
  @Input() image: string;
  @Input() id: number | string;
  @Input() name: string;
  @Input() ibolActive: boolean;
  @Input() spell: Spell;
  confirmed = false;
  cancel = false;
  currentCooldown: number | null;
  counting = false;
  init: number = null;
  $interval: Subscription;
  $timer: Subscription;
  stopCounting$: Subject<null> = new Subject();
  confirmCheck: boolean;

  constructor() {


  }

  ngAfterViewInit(): void {
    this.currentCooldown = this.spell.cooldown;
  }

  public startCooldown() {
    if (this.counting) {
      return;
    }
    this.currentCooldown = this.ibolActive ? this.spell.cooldown * 0.8928571 : this.spell.cooldown;
    this.currentCooldown = Math.round(this.currentCooldown);
    this.counting = true;
    this.$interval = interval(1000).pipe(takeUntil(this.stopCounting$)).subscribe(x => {
      this.currentCooldown--;
      if (this.currentCooldown <= 0) {
        this.reset();
      }
    });
  }

  // Ionian Boots Of Lucidity:  0.8928571
  // Cosmic Insight:            0.8474523
  // IBOL + Cosmic Insight:     0.7692380
  // GET https://127.0.0.1:2999/liveclientdata/activeplayerrunes
  // GET https://127.0.0.1:2999/liveclientdata/playersummonerspells?summonerName=
  // GET https://127.0.0.1:2999/liveclientdata/playermainrunes?summonerName=

  onClick() {
    if (!this.counting) {
      this.startCooldown();
      return;
    }
    this.confirmCancel();
  }

  public reset() {
    this.stopCounting$.next();
    this.counting = false;
    this.currentCooldown = this.spell.cooldown;
  }

  public cancelCooldown() {
    //this.confirm = true
    this.reset();

  }

  public confirm() {
    this.confirmed = true;
    this.$timer = timer(2000).subscribe(x => {
      this.$timer.unsubscribe();
      this.confirmed = false;
    });
  }

  private confirmCancel() {
    this.confirmCheck = true;
    if (this.confirmed) {
      this.cancelCooldown();
      this.confirmCheck = false;
      this.confirmed = false;
    }
    if (this.confirmCheck) {
      this.confirm();
      this.confirmCheck = false;
      return;
    }
  }


}


