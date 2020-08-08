import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';
import { Employee } from '../../employee';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit
{

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  allEmps: Employee[];
  autoCompleteList: any[]

  @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit()
  {
    this.dataService.getPosts().subscribe(posts =>
    {
      this.allEmps = posts

    });

    this.myControl.valueChanges.subscribe(userInput =>
    {
      this.autoCompleteExpenseList(userInput);
    })
  }

  private autoCompleteExpenseList(input)
  {
    let categoryList = this.filterCategoryList(input)
    this.autoCompleteList = categoryList;
  }

  filterCategoryList(val)
  {
    var categoryList = []
    if (typeof val != "string")
    {
      return [];
    }
    if (val === '' || val === null)
    {
      return [];
    }
    return val ? this.allEmps.filter(s => s.fullname.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allEmps;
  }

  displayFn(emp: Employee)
  {
    let k = emp ? emp.fullname : emp;
    return k;
  }

  filterPostList(event)
  {
    var emps = event.source.value;
    if (!emps)
    {
      this.dataService.searchOption = []
    }
    else
    {
      console.log("not")

      this.dataService.searchOption.push(emps);
      this.onSelectedOption.emit(this.dataService.searchOption)
    }
    this.focusOnPlaceInput();
  }


  removeOption(option)
  {
    let index = this.dataService.searchOption.indexOf(option);
    if (index >= 0)
      this.dataService.searchOption.splice(index, 1);
    this.focusOnPlaceInput();

    this.onSelectedOption.emit(this.dataService.searchOption)
  }

  focusOnPlaceInput()
  {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
  }
}
