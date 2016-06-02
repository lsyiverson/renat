export const FETCH_USER = 'FETCH_USER';
export const FILTER_USER = 'FILTER_USER';
export function userListAction() {
  return dispatch => {
    fetch('http://facehub.net/api/users', {
      headers: {
        Cookie: 'token=Aw5k7BHAum28zDLbg3QVJE'
      }
    }).then(res=> {
      if (res.ok) {
        return res.json();
      }
      throw res.error();
    }).then(json=> {
      dispatch({
        type: FETCH_USER,
        payload: json.users
      });
    }).catch(error => console.log('request error: ', error));
  }
}

export function userFilterAction(filter) {
  return {
    type: FILTER_USER,
    filter: filter
  }
}