import { Component, OnInit, ViewChild  } from '@angular/core';
import { CSVRecord } from 'src/app/model/CSVRecord';
import { ServiceService } from 'src/app/Service/service.service';
import { Attribute } from 'src/app/model/Attribute';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {
  atribute:Attribute = new Attribute();
  atributeForBack:Attribute = new Attribute();

  constructor(private service:ServiceService) { }

  ngOnInit() {
  }

  title = 'Angular7-readCSV';
  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;

  uploadListener($event: any): void {
    let text = [];
    let files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];
    console.log(csvRecordsArray);
    this.atributeForBack.active=1;
    //this.atributeForBack.data = csvRecordsArray;
    this.atributeForBack.graphicidgraphic = 1;
    this.atributeForBack.datos = 'frfr';
    //console.log()
    this.service.createAttribute(this.atributeForBack)
    .subscribe(data=>{
      alert("Creacios Exitosa");
    })
    //createAtribute(this.atributeForBack);
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: CSVRecord = new CSVRecord();
        csvRecord.id = curruntRecord[0].trim();
        csvRecord.City = curruntRecord[1].trim();
        csvRecord.Discipline = curruntRecord[2].trim();
        csvRecord.Event = curruntRecord[3].trim();
        csvRecord.Eventgender = curruntRecord[4].trim();
        csvRecord.Medal = curruntRecord[5].trim();
        csvRecord.NOC = curruntRecord[6].trim();
        csvRecord.Sport = curruntRecord[7].trim();
        csvRecord.Year = curruntRecord[8].trim();
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }
  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }
  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.records = [];
  }

  createAtribute(atribute:Attribute){
    this.service.createAttribute(this.atribute)
    .subscribe(data=>{
      alert("Creacios Exitosa");
    })
  }

}
