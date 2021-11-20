import { Component } from '@angular/core';
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Control-Empresa-FrontEnd';

  generarPDF(){
    const pdf = new PdfMakeWrapper();

    pdf.add(
        new Txt('Hola Mundo').bold().end
    );
    pdf.create().open();
  }

}
