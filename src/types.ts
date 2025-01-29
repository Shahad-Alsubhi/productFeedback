

export type Status = "In-progress" | "Live" | "Planned" | "Sugestion";
export type Category= "UX" | "UI" | "Feature" | "Bug" | "Enhancement";

export interface IFeedback {
    _id: string;
    userId: string;
    title: string;
    detail: string;
    category:Category 
    update_status: Status;
    Upvotes: number;
    comments: IComment[];
  }
  export interface IComment {
    _id: string;
    created_by: { email: string; name: string; picture: string; username:string };
    text: string;
    replay_to?: string;
    parent_comment?: string;
  }