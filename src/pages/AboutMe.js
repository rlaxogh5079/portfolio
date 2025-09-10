import "../styles/AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="about section">
      <div className="about-container">
        <header className="profile card">
          <div className="profile-container">
            <img
              className="profile-image"
              src="https://avatars.githubusercontent.com/u/91653804?v=4"
              alt="프로필 사진"
              loading="lazy"
            />
          </div>

          <div className="content-container">
            <h2 className="content-title">김태호 · Full-stack Developer</h2>
            <p className="content-subtitle">
              이상과 상상을 현실로. <br />
              프론트엔드부터 백엔드, 인프라까지 아우르는 풀스택 개발자입니다.
            </p>
            <p className="content-summary">
              Go(Gin) 백엔드와 Flutter 기반의 멀티플랫폼 클라이언트, 그리고
              Docker·VMware ESXi 환경에서의 배포에 강점이 있습니다. 데이터 기반
              문제 해결을 선호하며, 성능·안정성·사용자 경험의 균형을 중요하게
              생각합니다.
            </p>

            <div className="content-desc">
              <div className="desc-container">
                <span className="desc-title">주요 스택</span>
                <span className="desc-content">
                  Go(Gin), Flutter, React, Docker, PostgreSQL
                </span>
              </div>
              <div className="desc-container">
                <span className="desc-title">관심 분야</span>
                <span className="desc-content">
                  웨어러블·의료데이터, 실시간 번역/커뮤니케이션, 인프라 자동화
                </span>
              </div>
              <div className="desc-container">
                <span className="desc-title">현재</span>
                <span className="desc-content">
                  Mind Guardians 연구 · Bridger B2B 플랫폼
                </span>
              </div>
            </div>
          </div>
        </header>

        <section className="about-highlight">
          <div className="h card">
            <div className="h-icon" aria-hidden>
              ⚙️
            </div>
            <h3 className="h-title">Product-oriented 개발</h3>
            <p className="h-content">
              기능 구현에 그치지 않고, 기획·데이터·배포까지 전주기를 고려합니다.
              사용자 스토리를 기반으로 설계하고 빠르게 실험/개선합니다.
            </p>
          </div>

          <div className="h card">
            <div className="h-icon" aria-hidden>
              🚀
            </div>
            <h3 className="h-title">성능 & 안정성</h3>
            <p className="h-content">
              Go 백엔드 + Docker 배포로 경량·고성능을 추구하고,
              로깅/모니터링으로 회복탄력성을 확보합니다.
            </p>
          </div>

          <div className="h card">
            <div className="h-icon" aria-hidden>
              🤝
            </div>
            <h3 className="h-title">협업 & 문서화</h3>
            <p className="h-content">
              이슈/PR 중심 협업, README·API 문서 정리, 커밋 컨벤션 준수로 팀
              생산성을 높입니다.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutMe;
