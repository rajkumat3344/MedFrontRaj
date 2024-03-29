export interface ISearch {
  type: string;
  name: string;
  degrees: string;
  serviceType: string;
  address: string;
  rating: 4.61;
  ratingCount: 250;
  distance: string;
  bestReviewTag: string;
  searchImage: string;
  feedbacks: string[];
  appointmentDetail: IAppointmentDetail;
}

interface IAppointmentDetail {
  firstWeek: IWeek[];
  secondWeek: IWeek[];
}

interface IWeek {
  day: string;
  date: string;
  year: string;
  noOfApp: string;
}
