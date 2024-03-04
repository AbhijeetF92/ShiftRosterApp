export class MonthlyShift
{
    public name!:string;
    public location!:string;
    public id!:string;
    public _monthShiftData!:Array<MonthShiftDetails>
}

export class MonthShiftDetails
{
    public date!:string;
    public shift!:string;
    public onCall!:string;
}