import { SessionDetails } from "./SessionDetails"


export function CurrentMenteeView(){
    var sessions=[{name:"Session on Soft skills training",date:"2023-07-02",time:"11:30AM",mode:"MS Teams meeting",link:"www.teams.microsoft.com"}];
    var sessions=[{name:"Session on Soft skills training",date:"2023-07-02",time:"11:30AM",mode:"MS Teams meeting",link:"www.teams.microsoft.com"},];
    return (<div><div
        className="two-rem-tag"
        style={{ padding: "20px 0px 5px 20px" }}
    >
        Sessions
    </div>
    {sessions.map((session,index)=><SessionDetails name={session.name} date={session.date} time={session.time} mode={session.mode} link={session.link} key={index}/>)}
    </div>)
}