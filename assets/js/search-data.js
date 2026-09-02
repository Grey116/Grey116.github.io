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
        },{id: "nav-实习经历",
          title: "实习经历",
          description: "产品经理与后端开发实习经历。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/internships/";
          },
        },{id: "nav-项目经历",
          title: "项目经历",
          description: "产品方案设计、选型论证与双端 MVP 交付经历。",
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
        },{id: "nav-综合能力",
          title: "综合能力",
          description: "产品、数据、技术、AI 工具与组织沟通能力。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/skills/";
          },
        },{id: "projects-ai-编程助手竞品分析看板",
          title: 'AI 编程助手竞品分析看板',
          description: "对比 7 款主流工具的定位、核心能力与适用场景，输出结构化选型建议。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai-coding-assistant-analysis/";
            },},{id: "projects-视频会议-ai-助手原型",
          title: '视频会议 AI 助手原型',
          description: "围绕会前准备、纪要生成与待办跟进，设计企业协同效率工具网页原型。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai-meeting-assistant-prototype/";
            },},{id: "projects-数码社区内容与推荐平台",
          title: '数码社区内容与推荐平台',
          description: "从竞品分析到双端 MVP 交付，建立内容与推荐效果评估链路。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/digital-community-platform/";
            },},{id: "projects-安全通信方案设计与评估",
          title: '安全通信方案设计与评估',
          description: "面向物联网与隐私计算场景的需求拆解、方案设计与选型论证。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/low-latency-authenticated-encryption/";
            },},{id: "projects-mustgo-校园运动社交-app",
          title: 'MustGo 校园运动社交 App',
          description: "面向校园运动组队场景的 App 方案设计、后端开发与测试。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mustgo-campus-sports-app/";
            },},{id: "projects-原型工具竞品分析看板",
          title: '原型工具竞品分析看板',
          description: "横评 9 款主流工具的学习成本、协作方式与交付能力，形成选型决策指南。",
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
