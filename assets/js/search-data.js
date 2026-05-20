// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-首页",
    title: "首页",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-教育背景",
          title: "教育背景",
          description: "教育经历与专业背景。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/education/";
          },
        },{id: "nav-项目经历",
          title: "项目经历",
          description: "围绕产品方案、需求拆解、技术理解和交付文档的项目经历。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-作品集",
          title: "作品集",
          description: "产品原型与竞品分析作品。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/";
          },
        },{id: "nav-学生工作",
          title: "学生工作",
          description: "班级服务与组织协作经历。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/leadership/";
          },
        },{id: "nav-技术能力",
          title: "技术能力",
          description: "产品工具、研发理解、材料写作与语言能力。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/skills/";
          },
        },{id: "projects-ai-编程助手竞品分析看板",
          title: 'AI 编程助手竞品分析看板',
          description: "七大主流 AI 编程工具横向对比与选型推荐。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai-coding-assistant-analysis/";
            },},{id: "projects-视频会议-ai-助手-网页应用原型",
          title: '视频会议 AI 助手-网页应用原型',
          description: "模拟 AI 驱动的会前准备、纪要生成与待办跟进全链路效率工具原型。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai-meeting-assistant-prototype/";
            },},{id: "projects-基于混合推荐算法的数码社区平台",
          title: '基于混合推荐算法的数码社区平台',
          description: "面向数码产品爱好者的移动端 App 与 Web 后台产品规划、设计与实现。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/digital-community-platform/";
            },},{id: "projects-低延迟认证加密算法的设计与分析",
          title: '低延迟认证加密算法的设计与分析',
          description: "面向高性能安全通信场景的技术需求拆解、方案对比与材料整理。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/low-latency-authenticated-encryption/";
            },},{id: "projects-mustgo-校园运动社交-app",
          title: 'MustGo 校园运动社交 App',
          description: "面向校园运动组队场景的 App 方案设计、后端开发与测试。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mustgo-campus-sports-app/";
            },},{id: "projects-原型图工具竞品分析看板",
          title: '原型图工具竞品分析看板',
          description: "九款主流原型工具深度横评与选型决策指南。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/prototyping-tools-analysis/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%6E%6A%69%61%77%65%69_%6D%61%69%6C@%31%36%33.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Grey116", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
