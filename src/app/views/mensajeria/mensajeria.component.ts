import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css']
})
export class MensajeriaComponent implements OnInit {

  listaMensajes: Message[] = [];

  constructor(public messageServ: MessageService, private toastr: ToastrService) { }


  ngOnInit(): void {
    this.toListMessages();

  }


  toListMessages() {
    this.messageServ.getMessages().subscribe(res => {
      // console.log(res);
      this.listaMensajes = [];
      res.forEach((element: any) => {
        // console.log(element);
        this.listaMensajes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    });
    console.log(this.listaMensajes);
    // })
  }

  deleteMessage(id: any) {
    if (confirm("Estas seguro que deseas eliminar éste mensaje?")) {
      this.messageServ.deleteMessage(id)
        .then(() => {
          this.toastr.info('Usuario eliminado con éxito', 'Usuario');
        },
          error => {
            console.log(error)
          });
    }
  }

}

