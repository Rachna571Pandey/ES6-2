// Classes and object and constructor


class RailwayForm{
    constructor(givenName, trainNo,address){
        console.log("constructor called...."+givenName+" " +trainNo)
        this.name=givenName
        this.trainNo=trainNo
        this.address=address
    }
    submit(){
        alert(this.name + ":Your Form is submitted for train number:"+this.trainNo)
    }

    cancel(){
        alert(this.name + ":your form is cancelled for train number:"+this.trainNo)
        this.trainNo=0
    }
    fill(givenName){
        this.name=givenName
    }
}

let rachnaForm=new RailwayForm("rachna",13266,"420, pacific ocean,bihar-0000666")
rachnaForm.fill("rachna")

let rohanForm=new RailwayForm()
rohanForm.fill("rohan")

rachnaForm.submit()
rohanForm.submit()
rohanForm.cancel()



