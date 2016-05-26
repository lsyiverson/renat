const mockUserList = [
  {
    "name": "詹CC",
    "office": "武汉",
    "title": "HR",
    "photo": "http://7xr6pw.com1.z0.glb.clouddn.com/5fb969f7e4354c92bb0276199754de38.png",
    "created_at": "2016-03-04 15:38:48",
    "id": 151,
    "project": "Wuhan HR",
    "avatar": "http://7xr6pw.com1.z0.glb.clouddn.com/76cb804727c9596df57dbaddd41c3599.png",
    "onboard": "2014-12-04",
    "email": "cc_zhan@thoughtworks.com"
  },
  {
    "name": "卢lj",
    "office": "北京",
    "title": "Dev",
    "photo": "http://7xr6pw.com1.z0.glb.clouddn.com/f9885c0f83ed4420b44f61421f04e664.png",
    "created_at": "2016-03-04 15:57:00",
    "id": 152,
    "project": "PwC",
    "avatar": "http://7xr6pw.com1.z0.glb.clouddn.com/e877be36603353167125fa37060ea80f.png",
    "onboard": "2015-07-06",
    "email": "lj_lu@thoughtworks.com"
  }
];

export const FETCH_USER = 'FETCH_USER';
export function userListAction(data = mockUserList) {
  return {
    type: FETCH_USER,
    payload: data
  }
}