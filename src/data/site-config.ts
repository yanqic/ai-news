// src/data/site-config.ts
// AI News Blog - Site Configuration
export const SITE_TITLE = 'AI新闻简报';
export const SITE_DESCRIPTION = '每日AI新闻简报，汇集AIBase、机器之心、新智元、Google AI Blog等来源的AI行业资讯。';
export const SITE_AUTHOR = 'AI新闻自动聚合';

export const SITE_AVATAR = '/assets/avatar.jpg';
export const SITE_SUBTITLE = '每日AI行业资讯';

export const SITE_NAVIGATION = [
  {
    name: '首页',
    url: '/'
  },
  {
    name: '历史存档',
    url: '/archive'
  }
];

export const SITE_SOCIAL = {
  github: 'https://github.com/yanqic/ai-news'
};

export const HERO_SECTION = {
  title: 'AI新闻简报',
  text: '每日AI新闻简报，汇集AIBase、机器之心、新智元、Google AI Blog等来源的AI行业资讯，以及GitHub Trending项目推荐。',
  image: '/assets/hero.jpg',
  buttons: [
    {
      text: '查看历史存档',
      url: '/archive',
      variant: 'primary'
    }
  ]
};

export const PAGINATION = {
  postsPerPage: 10
};

export const COPYRIGHT = '© 2026 AI新闻简报 · AI自动聚合摘要';
