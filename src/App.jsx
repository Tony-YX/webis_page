import React from 'react';

const sourceItems = ['流程', '邮件', '合同', '偏好', '代码', '反馈', '边界', '证据'];

const trainingOutputs = ['来源', '场景', '边界', '证据', '反馈标准'];

const schoolMoments = [
  ['任务练习', 'Agent 在真实任务中调用教材，形成第一次判断。'],
  ['反馈批改', '用户与专家修正结果，把偏好、边界和盲点标出来。'],
  ['认知更新', '反馈回到教材，让下一次理解更接近服务对象。'],
];

const controlItems = ['能力单元', '版本', '溯源', '权限', '复用'];

const storyModules = [
  {
    id: '01',
    anchor: 'textbook',
    eyebrow: 'AGENT TEXTBOOK',
    title: '先把世界，写成 Agent 能读懂的教材。',
    summary: '把散落知识编成可学习材料',
    paragraphs: [
      '流程、邮件、合同、偏好、代码和反馈，不再只是散落资料。',
      'Webis 会把它们精炼成 Agent 的学习教材：每条知识都带着来源、场景、边界、证据和反馈标准。',
    ],
    visual: 'field',
  },
  {
    id: '02',
    anchor: 'mechanism',
    eyebrow: 'AGENT SCHOOL',
    title: 'Agent 不只读取教材，还要在任务里练习。',
    summary: '让 Agent 在任务中练习、反馈、修正',
    paragraphs: [
      'Webis 像一所面向 Agent 的学校。Agent 在真实任务中调用教材、接受反馈、修正判断。',
      '每一次练习都会反过来优化教材，让下一次理解更接近它要服务的人、团队或项目。',
    ],
    visual: 'agent',
  },
  {
    id: '03',
    anchor: 'control',
    eyebrow: 'COGNITIVE LIBRARY',
    title: '学到的认知，最终要被留下来。',
    summary: '沉淀可复用、可治理的长期能力',
    paragraphs: [
      '稳定的判断、偏好、边界、证据和版本记录，会进入 Webis 的认知资产图书馆。',
      '它们不再只是某次对话的结果，而是 Agent 可以继承、复用、追溯和治理的长期能力。',
    ],
    visual: 'asset',
  },
];

const productSources = ['企业流程库', '个人偏好集', '专家反馈', '项目资料'];
const productSignals = ['来源', '场景', '边界', '证据', '反馈'];

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Webis home">
        <span className="brand-mark">W</span>
        <span>Webis</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#story">产品故事</a>
        <a href="#mechanism">工作原理</a>
        <a href="#product">产品展示</a>
        <a href="#control">可信与控制</a>
      </nav>
      <a className="nav-cta" href="#cta">预约演示</a>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Knowledge garden entering Webis training layer">
      <div className="hero-photo" />
      <div className="photo-mist" />
      <div className="knowledge-beam beam-one" />
      <div className="knowledge-beam beam-two" />
      <div className="floating-note note-one">
        <span>教材生成中</span>
        <em>source · scenario · boundary</em>
      </div>
      <div className="floating-note note-two">
        <span>反馈已写回</span>
        <em>correction · preference · rubric</em>
      </div>
      <div className="floating-note note-three">
        <span>认知资产已归档</span>
        <em>versioned · traceable · reusable</em>
      </div>
      <div className="glass-chip">
        <span>WEBIS</span>
        <strong>Training Layer</strong>
        <small>worlds become capability</small>
      </div>
    </div>
  );
}

function Opening() {
  return (
    <section className="opening" id="top">
      <div className="shell opening-grid">
        <div className="opening-copy glass-copy">
          <Badge>TO AGENT KNOWLEDGE INFRASTRUCTURE</Badge>
          <h1>
            让每个 Agent
            <br />
            学会它要服务的世界
          </h1>
          <p>
            Webis 把企业流程、个人资料、专家经验、任务反馈和使用偏好，转化为
            Agent 可学习、可验证、可持续迭代的能力资产。
          </p>
          <div className="opening-lines">
            <span>知识先被精炼成教材。</span>
            <span>Agent 在任务中练习并反馈。</span>
            <span>认知沉淀为可继承资产。</span>
          </div>
          <div className="opening-actions">
            <a className="button primary" href="#story">顺着故事看下去</a>
            <a className="button secondary" href="#product">直接看产品展示</a>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="scroll-cue">Four moves: world · layer · task · capability.</div>
    </section>
  );
}

function FieldVisual() {
  return (
    <div className="story-visual field-visual" aria-label="Scattered knowledge field">
      {sourceItems.map((item) => (
        <span key={item}>{item}</span>
      ))}
      <div className="textbook-page">
        <small>Agent Textbook</small>
        <strong>可学习教材</strong>
        <em>来源 · 场景 · 边界 · 证据 · 反馈标准</em>
      </div>
    </div>
  );
}

function TranslationVisual() {
  return (
    <div className="story-visual translation-visual" aria-label="Webis translation layer">
      <div className="raw-stack">
        <span>资料</span>
        <span>偏好</span>
        <span>反馈</span>
      </div>
      <div className="layer-core">
        <small>WEBIS</small>
        <strong>Training Layer</strong>
      </div>
      <div className="output-stack">
        {trainingOutputs.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function AgentVisual() {
  return (
    <div className="story-visual agent-visual" aria-label="Agents learning different worlds">
      {schoolMoments.map(([title, text]) => (
        <div className="agent-lane" key={title}>
          <strong>{title}</strong>
          <span>{text}</span>
        </div>
      ))}
      <div className="agent-core">Agent School</div>
      <div className="training-return">反馈回写教材</div>
    </div>
  );
}

function AssetVisual() {
  return (
    <div className="story-visual asset-visual" aria-label="Capability asset with governance">
      <div className="asset-network">
        <strong>认知资产图书馆</strong>
        <span>verified · versioned · reusable</span>
      </div>
      <div className="library-shelf">
        <span>偏好索引</span>
        <span>边界记录</span>
        <span>证据链</span>
        <span>版本轨迹</span>
      </div>
      <div className="control-ring">
        {controlItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

const visuals = {
  field: <FieldVisual />,
  translation: <TranslationVisual />,
  agent: <AgentVisual />,
  asset: <AssetVisual />,
};

function StoryModule({ module }) {
  return (
    <article className="story-module" id={module.anchor}>
      <div className="module-copy">
        <span className="module-number">{module.id}</span>
        <span className="chapter-eyebrow">{module.eyebrow}</span>
        <h2>{module.title}</h2>
        <strong className="module-summary">{module.summary}</strong>
        {module.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {visuals[module.visual]}
    </article>
  );
}

function StoryFlow() {
  return (
    <section className="story-section" id="story">
      <div className="shell story-intro">
        <Badge>THREE-PART PRODUCT SYSTEM</Badge>
        <h2>Webis 的三层成长系统</h2>
        <p>
          三屏讲清系统结构：教材负责精炼知识，学校负责练习与反馈，图书馆负责沉淀认知。随后进入产品展示，看它们如何落在真实界面里。
        </p>
      </div>
      <div className="shell story-modules">
        {storyModules.map((module) => (
          <StoryModule module={module} key={module.id} />
        ))}
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section className="product-showcase" id="product">
      <div className="shell showcase-heading">
        <Badge>PRODUCT VIEW</Badge>
        <h2>看见 Webis 如何训练一个 Agent</h2>
        <p>
          这里保留给产品本身。用户可以直观看到知识如何接入、如何被整理成训练层，以及 Agent 如何在任务中调用这些能力。
        </p>
      </div>
      <div className="shell product-stage">
        <div className="product-window" aria-label="Webis product console preview">
          <div className="window-bar">
            <span />
            <span />
            <span />
            <strong>Webis Training Console</strong>
          </div>
          <div className="console-grid">
            <aside className="console-sidebar">
              <small>Sources</small>
              {productSources.map((item) => (
                <button key={item}>{item}</button>
              ))}
            </aside>
            <main className="console-main">
              <div className="console-header">
                <div>
                  <small>Training Set</small>
                  <h3>Agent 服务对象理解层</h3>
                </div>
                <span>Live sync</span>
              </div>
              <div className="signal-grid">
                {productSignals.map((item) => (
                  <div key={item}>
                    <small>{item}</small>
                    <strong>{item === '边界' ? '需要确认后记忆' : '已结构化'}</strong>
                  </div>
                ))}
              </div>
              <div className="trace-panel">
                <span>Feedback Trace</span>
                <p>用户修改了输出语气，Webis 将“更克制、更像产品策略文档”的偏好写回训练层。</p>
              </div>
            </main>
            <aside className="agent-panel">
              <small>Agent Playground</small>
              <h3>Research Agent</h3>
              <p>调用 12 个知识单元，生成一版符合当前项目语气的调研摘要。</p>
              <div className="agent-output">
                <span>Confidence</span>
                <strong>92%</strong>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing" id="cta">
      <div className="shell closing-grid">
        <div className="closing-glass">
          <Badge>START FROM THE FIRST TRAINING SET</Badge>
          <h2>把你的知识，变成 Agent 可以继承的能力。</h2>
          <p>
            从一组真实资料、一个真实任务、一个真实 Agent 开始。Webis 会帮助它完成第一次学习、执行、反馈和更新。
          </p>
        </div>
        <div className="closing-panel glass-copy">
          <span>资料进入</span>
          <span>知识结构化</span>
          <span>任务中学习</span>
          <span>能力被留下</span>
          <a className="button primary" href="mailto:hello@webis.ai">预约演示</a>
        </div>
      </div>
    </section>
  );
}

function App() {
  React.useEffect(() => {
    if (!window.location.hash) return;

    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Opening />
        <StoryFlow />
        <ProductShowcase />
        <Closing />
      </main>
    </>
  );
}

export default App;
