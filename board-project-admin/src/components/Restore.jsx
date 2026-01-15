import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Restore() {
  const [withdrawbMembers, setWithdrawbMembers] = useState(null);  // 탈퇴 회원 목록
  // 삭제 게시글 목록
  const [isLoading, setIsLoading] = useState(true);

  // 탈퇴한 회원 목록 조회용 함수
  const getWithdrawnMemberList = async() => {
    try {
      const resp = await axiosApi.get("/admin/withdrawnMemberList");

      if(resp.status === 200) {
        setWithdrawbMembers(resp.data);
      }
    } catch (error) {
      console.error("탈퇴 회원 목록 조회 중 에러 발생 : ", error);
    }
  }

  // 탈퇴한 회원 복구 요청 함수
  const restoreMember = async(member) => {
    if(window.confirm(member.memberNickname + "님을 탈퇴 복구 시키시겠습니까?")) {
      try{
        const resp = await axiosApi.put("/admin/restoreMember", {memberNo : member.memberNo});
        if(resp.status === 200) {
          alert("복귀 되었습니다!");
          getWithdrawnMemberList();
        }
      } catch(error) {
        console.error(error);
      }
    }
  }

  // 삭제된 게시글 목록 조회용 함수

  // 삭제된 게시글 복구 요청 함수

  // Restore 컴포넌트가 첫 마운트 될 때 실행
  useEffect( () => {
    getWithdrawnMemberList();
  }, []);

  // withdrawbMembers, deleteBoards 상태가 변경될 때 실행(isLoading 값 변경)
  useEffect( () => {
    if(withdrawbMembers != null) {
      setIsLoading(false);
    }
  }, [withdrawbMembers])

  if(isLoading) {
    return <h1>Loading...</h1>;
  } else {
     return (
      <div className="menu-box">
        <section className="section-border">
          <h2>탈퇴 회원 복구</h2>

          <h3>탈퇴한 회원 목록</h3>

          {withdrawbMembers.length === 0 ? (
            <p>탈퇴한 회원이 없습니다</p>
          ) : (
             withdrawbMembers.map( (member, index) => {
              return (
                <ul className="ul-board" key={index}>
                  <li>회원 번호 : {member.memberNo}</li>
                  <li>회원 번호 : {member.memberEmail}</li>
                  <li>회원 번호 : {member.memberNickname}</li>
                  <button className="restoreBtn"
                  onClick={() => restoreMember(member)}
                  >복구</button>
                </ul>
              )
             })
          )}

        </section>

        <section className="section-border">
          <h2>삭제 게시글 복구</h2>

          <h3>삭제된 게시글 목록</h3>

        </section>
      </div>
    );
  }
}
