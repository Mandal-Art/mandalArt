import React, {useEffect, useState} from 'react';
import * as firebase from "firebase";


const Delete=(props)=>{

    const onDelete=(e)=>{
        e.preventDefault();

        const uid = JSON.parse(localStorage.getItem('logInfo')).user.uid;
        const database = firebase.database();

        database.ref(`mandal/${uid}`).once('value', (snapshot) => {
            let obj = snapshot.val();
            let keyList = [];

            //키값 찾기
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    keyList.push(key);
                    // console.log(key);
                }
            }
            // console.log(keyList[props.pageNo]);
            //삭제
            database.ref(`mandal/${uid}/${keyList[props.pageNo]}`).remove();
        }).then(()=>{
           window.location.reload();
        });
    }

    return(
        <>
            {/*{*/}
            {/*   redirect && <Redirect/>*/}
            {/*}*/}
            <button className="btn delete" onClick={onDelete}><img className="w-100" src={require('../../assets/icon/cancel.svg')}/></button>
        </>
    );

}

export default Delete;