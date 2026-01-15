import React, { useEffect }  from "react";

export default function Statistics() {

  // 가장 조회수 많은 게시글
  const getMaxReadCount = () => {

  }

  // 가장 좋아요 많은 게시글
  const getMaxLikeCount = () => {
    
  }
  // 가장 댓글 많은 게시글
  const getMaxCommentCount = () => {
    
  }

  // 컴포넌트가 처음 마운트될 때 1번 실행
  useEffect( () => {
    getMaxReadCount();
    getMaxLikeCount();
    getMaxCommentCount();
  }, []);  // 의존성 배열이 비어있기 때문에 1번만 실행됨

  return (
    <div>
      <section className="statistics-section">
        <h2>가장 조회수 많은 게시글</h2>
      </section>

      <section className="statistics-section">
        <h2>가장 좋아요 많은 게시글</h2>
      </section>

      <section className="statistics-section">
        <h2>가장 댓글 많은 게시글</h2>
      </section>
    </div>
  );
}
