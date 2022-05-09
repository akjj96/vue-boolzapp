const boolzapp = new Vue({
    el: '#app',

    data: { 
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        
                        show:false,
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        
                        show:false,
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        
                        show:false,
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        
                        show:false,
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        
                        show:false,
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        
                        show:false,
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        
                        show:false,
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        
                        show:false,
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        show:false,

                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        
                        show:false,
                        date: '15/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        
                        show:false,
                        date: '15/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        
                        show:false,
                        date: '26/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        
                        show:false,
                        date: '26/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        
                        show:false,
                        date: '13/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        
                        show:false,
                        date: '13/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        
                        show:false,
                        date: '13/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        
                        show:false,
                        date: '29/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        
                        show:false,
                        date: '29/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        show:false,
                        date: '11/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        
                        show:false,
                        date: '11/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        
                        show:false,
                        date: '11/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ] ,
        currentIndex:0,
        searchText:'',
        message:'',
        



    },

    methods: {
        selected(index){
            this.currentIndex = index;
            
        },
        sendMessage(){
            const newMessage = {
                date:dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: this.message,
                status:'sent',
                show:false,


            }
            let random = ['Ehilà', 'Tutto ok?', 'Non mi sento molto bene ', 'Sai quando è il colpeanno di claudia?','Sushino??','CIAO MAMMA', 'NON CI POSSO CREDERE LA SIGNORINA DEL NAVIGATORE!!']
            const responseMessage =
            {
                date:dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: random[Math.floor(Math.random() * random.length)],
                status:'received',
                show:false,


            }; 
            this.contacts[this.currentIndex].messages.push(newMessage);
            this.message='';
            setTimeout(()=>{
            this.contacts[this.currentIndex].messages.push(responseMessage);


            },2000)

        },
        filterContact(){
            this.contacts.forEach((contact)=>{
                if(contact.name.toLowerCase().includes(this.searchText.toLowerCase())){
                    contact.visible = true;
                }else{
                    contact.visible = false;


                }

            })

        },
        cancellaMessaggio() {
            this.contacts[this.currentIndex].messages.pop(this.message);
        },
        showDrop(index){
            this.contacts[this.currentIndex].messages[index].show= !this.contacts[this.currentIndex].messages[index].show


        }

    }
})