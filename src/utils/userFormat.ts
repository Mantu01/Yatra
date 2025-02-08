interface UserData {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  imgUrl?: string;
  isVerified?: boolean;
}

export function userFormat(data:any){
  const user:UserData={
    id:data?.uid,
    name:data?.displayName,
    email:data?.email,
    password: '',
    phone: data?.phoneNumber,
    imgUrl: data?.photoURL,
  };

  return user;
};