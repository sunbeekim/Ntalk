# Ntalk
Ntalk_Prototype
outline // model : Interactive compensatory Model(상호보완 모형)
- 앱 사용자의 근거리에 같은 앱을 사용하는 사용자를 표시하여 커뮤니케이션을 가능하게 하고, 사용자 및 다른 사용자의 뉴스피드(게시글)의 업로드를 기준으로 위치를 기록하고 사용자 반경 n미터 내의 뉴스피드를 최신순으로 정렬하여 사용자의 뉴스피드에 출력
- 목적 : 여행, 만남, 특정지역의 정보공유

1. 요구사항
 - 사용자는 구글, 카카오의 아이디로 로그인 할 수 있음
 - 사용자는 자신의 프로필을 설정할 수 있음(이름, 프로필사진, 상태메세지)
 - 사용자의 위치를 기반으로 사용자 반경 n미터 내의 다른 사용자의 프로필을 거리순으로 출력(패턴 알고리즘 선정 중요!)
 - 사용자는 출력된 다른 사용자와 대화를 할 수 있음
 - 사용자는 다른 사용자의 대화 메세지를 차단할 수 있음
 - 사용자의 위치는 특정시간마다 갱신되어 다른 사용자가 출력 됨
 - 사용자는 버튼액션을 통해 다른 사용자 목록을 갱신할 수 있음
 - 사용자는 다른 사용자와의 대화목록을 삭제할 수 있음
 - 사용자는 뉴스피드를 업로드할 수 있고, 업로드 기준의 위치가 기록됨
 - 사용자의 반경 n미터 기준으로 사용자 및 다른 사용자가 업로드한 뉴스피드를 최신순으로 볼 수 있음
 - 다른사용자 목록은 제한될 수 있음
 
 // 사용자, 구글ID, 카카오ID, 프로필, 설정, 사용자이름, 프로필사진, 상태메세지, 위치, 반경, 다른사용자, 거리, 대화, 차단, 특정시간, 갱신, 목록, 대화삭제, 뉴스피드, 업로드, 기준, 최신순, 제한
 // 모듈화 기능 분류
 // DB 분리(MYSQL - 계정 권한, MONGODB - 사진, 텍스트, 대화, 뉴스피드 등, SQLITE - 대화목록, 내용 등 외부통신 최소화)
 // 정적 뷰 작성 - > 동적 뷰 작성
 // 기능 적용 - > 사용자 GPS 위치 기록, 위치기준 다른사용자 탐색알고리즘(유저테이블), 위치기준 게시글탐색 알고리즘
 // 웹소캣 실시간데이터베이스 시스템(POOLING)
 // html, css
 // vanilla JS - (날것의 javascript)
 // react native(java, kotlin/ Ob-c, Swift)
 // node.js
 // mobx
 // mysql
 // mongodb
 // sqlite
 // typescript
 // express
 
Index
 Revision History
 Menu Structure
 List of Screen
 Story Board
