import {Component, Input, OnInit} from "@angular/core";
import {interval} from "rxjs/internal/observable/interval";
import {takeUntil} from "rxjs/internal/operators/takeUntil";
import {Subject} from "rxjs/internal/Subject";
import {Subscription} from "rxjs/internal/Subscription";


@Component({
  selector: "app-summoner-spell",
  templateUrl: "./summoner-spell.component.html",
  styleUrls: ["./summoner-spell.component.scss"],
})
export class SummonerSpellComponent {
  @Input() image: string;
  @Input() id: number | string;
  @Input() name: string;
  @Input() cooldown: number | null = 300;
  currentCooldown: number | null;
  @Input() counting = false;
  @Input() init: number = null;
  $timer: Subscription;
  @Input() confirmed = false;
  @Input() cancel = false;
  stopCounting$: Subject<null> = new Subject();
  confirmCheck: boolean;

  constructor() {
    this.currentCooldown = this.cooldown;
  }


  public startCooldown() {
    if (this.counting) {
      return;
    }
    this.counting = true;
    this.$timer = interval(1000).pipe(takeUntil(this.stopCounting$)).subscribe(x => {
      this.currentCooldown--;
      if (this.currentCooldown === 0) {
        this.reset();
      }
    });
  }

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
    this.currentCooldown = this.cooldown;
  }

  public cancelCooldown() {
    //this.confirm = true
    this.reset();

  }


  private confirmCancel() {
    if (this.confirmed) {
      this.cancelCooldown();
      this.confirmCheck = false;
      this.confirmed = false;
    }
    if (this.confirmCheck) {
      this.confirmed = true;
      this.confirmCheck = false;
      return;
    }
    this.confirmCheck = true;
  }
}


