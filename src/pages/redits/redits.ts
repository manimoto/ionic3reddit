import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReditProvider } from '../../providers/redit/redit';
import { DetailsPage } from '../details/details';
@Component({
  selector: 'page-redits',
  templateUrl: 'redits.html'
})
export class ReditsPage {
  items:any;
  category:any;
  limit:any;
  constructor(public navCtrl: NavController, public navParams: NavParams , private reditProvider: ReditProvider) {
    this.getDefaults();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReditsPage');
  }

  
  getDefaults(){
    if(localStorage.getItem('category') != null){
      this.category = localStorage.getItem('category');
    }
    else{
      this.category = 'sports';
    }

   if(localStorage.getItem('limit') != null){
     this.limit = localStorage.getItem('limit');
   }else{this.limit = 10;}
   
  }

  
  ionViewWillEnter(){
      this.getPosts(this.category, this.limit);
  }

  getPosts(cat,limit){
   this.reditProvider.getPosts(cat , limit)
    .subscribe(response => { console.log("Im there" + response); this.items = response.data.children; }
    )
  }

  changeCategory(){
    this.getPosts(this.category, this.limit);
  }

  viewItem(item){
    this.navCtrl.push(DetailsPage , {
      item:item
    })
  }

} 
