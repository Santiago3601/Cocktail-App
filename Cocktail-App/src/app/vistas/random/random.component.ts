import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators } from "@angular/forms"

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {


  coctailRandom:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRandom().subscribe(data=>this.coctailRandom=data.drinks);
  }
showRandomCocktail():void{
  this.apiService.getRandom().subscribe(data=>this.coctailRandom=data.drinks);
  //console.log(this.coctailRandom); 
}


}
