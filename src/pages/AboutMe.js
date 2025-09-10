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
              Go(Gin, Fiber), Python(FastAPI, Flask, Django),
              Node.js(Express.js) 등 다양한 백엔드 프레임워크를 다룰 수 있고,
              클라이언트 쪽은 React와 Flutter로 자주 작업합니다. Docker와 VMware
              ESXi 환경에서의 배포 경험이 있으며, Cloudflare, AWS, OCI 같은
              클라우드 서비스도 활용해봤습니다. 데이터 기반으로 문제를 해결하는
              걸 좋아하고, 성능·안정성·사용자 경험의 균형을 늘 중요하게
              생각합니다.
            </p>

            <div className="content-desc">
              <div className="desc-container">
                <span className="desc-title">주요 스택</span>
                <span className="desc-content">
                  Go(Gin, Fiber), Python(FastAPI, Flask, Django),
                  Node.js(Express.js), React, Flutter, PostgreSQL
                </span>
              </div>
              <div className="desc-container">
                <span className="desc-title">관심 분야</span>
                <span className="desc-content">
                  대규모 웹 서비스 아키텍쳐, 멀티플랫폼 앱 최적화, 보안 자동화,
                  머신러닝 기반 데이터 분석
                </span>
              </div>
              <div className="desc-container">
                <span className="desc-title">현재</span>
                <span className="desc-content">
                  국가과학기술인력개발원(KIRD) 2025 장애-비장애 학생 팀 프로젝트
                  (Mind Gurdians) 참가중
                </span>
              </div>
            </div>
          </div>
        </header>

        <section className="about-highlight">
          <div className="h card">
            <div className="h-icon" aria-hidden>
              🏗️
            </div>
            <h3 className="h-title">대규모 웹 서비스 아키텍처</h3>
            <p className="h-content">
              모놀리식과 마이크로서비스를 상황에 맞게 선택하고, API
              설계·캐싱·큐잉으로 트래픽을 견딜 수 있는 구조를 만듭니다. 수평
              확장과 장애 격리를 염두에 둔 설계로 안정적인 서비스를 지향합니다.
            </p>
          </div>

          <div className="h card">
            <div className="h-icon" aria-hidden>
              📱
            </div>
            <h3 className="h-title">멀티플랫폼 앱 최적화</h3>
            <p className="h-content">
              React와 Flutter로 웹·모바일을 동시에 커버합니다. 불필요한 렌더를
              줄이고 상태 관리를 정돈해 성능을 끌어올리며, 접근성·국제화·릴리즈
              자동화까지 고려해 제품 완성도를 높입니다.
            </p>
          </div>

          <div className="h card">
            <div className="h-icon" aria-hidden>
              📊
            </div>
            <h3 className="h-title">머신러닝 기반 데이터 분석</h3>
            <p className="h-content">
              Python과 다양한 라이브러리로 데이터를 수집·전처리하고, 시각화와
              모델링을 통해 문제 해결의 인사이트를 발굴합니다. 서비스 운영
              지표부터 사용자 행동까지 데이터 중심의 접근을 선호합니다.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutMe;
