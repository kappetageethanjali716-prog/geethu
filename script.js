const sampleReels = [
  {
    title: 'Python password generator in 10 lines',
    watch: 78,
    rewatch: 31,
    save: 44,
    like: 92,
    comment: 19,
    pattern: 'secure coding',
    signal: 'password + security + practical coding',
    interest: 'Cybersecurity',
    category: 'Security'
  },
  {
    title: 'Java interview joke: “I only know System.out.println”',
    watch: 84,
    rewatch: 18,
    save: 7,
    like: 73,
    comment: 67,
    pattern: 'career survival + meme',
    signal: 'Java meme + interview humor + dev lifestyle',
    interest: 'Career',
    category: 'Career'
  },
  {
    title: 'Developer desk setup + morning routine',
    watch: 81,
    rewatch: 27,
    save: 4,
    like: 76,
    comment: 10,
    pattern: 'lifestyle + productivity',
    signal: 'productivity lifestyle + workspace aspiration',
    interest: 'Career',
    category: 'Lifestyle'
  },
  {
    title: 'I built a secure login form in Python',
    watch: 69,
    rewatch: 39,
    save: 28,
    like: 87,
    comment: 21,
    pattern: 'auth engineering',
    signal: 'secure login + app-building + repeat learning',
    interest: 'Cybersecurity',
    category: 'Security'
  },
  {
    title: '3 AI tools every dev should use in 2025',
    watch: 89,
    rewatch: 12,
    save: 9,
    like: 78,
    comment: 16,
    pattern: 'shallow hype',
    signal: 'tool list + broad AI buzz',
    interest: 'AI',
    category: 'AI'
  },
  {
    title: 'Why your password is insecure and what to do instead',
    watch: 74,
    rewatch: 42,
    save: 52,
    like: 90,
    comment: 28,
    pattern: 'education + security fundamentals',
    signal: 'security hygiene + repeated learning + high saves',
    interest: 'Cybersecurity',
    category: 'Security'
  },
  {
    title: 'System design interview: rate limiting and caching',
    watch: 72,
    rewatch: 38,
    save: 31,
    like: 88,
    comment: 24,
    pattern: 'system design',
    signal: 'interview architecture + scalable backend logic',
    interest: 'HLD',
    category: 'HLD'
  },
  {
    title: 'How LLMs actually work: attention + embeddings',
    watch: 65,
    rewatch: 46,
    save: 48,
    like: 83,
    comment: 27,
    pattern: 'deep AI learning',
    signal: 'mechanism-first AI understanding',
    interest: 'AI',
    category: 'AI'
  }
];

const recommendationCatalog = [
  {
    title: 'JWT authentication explained with a Flask example',
    category: 'Cybersecurity',
    difficulty: 'Advanced',
    confidence: 94,
    evidence: 'Because you engaged with password generation and secure login workflows → we inferred a strong interest in auth systems and secure engineering → we recommend JWT authentication learning.',
    why: 'This matches your repeated exposure to password security and practical app-building behavior. The semantic pattern is security-by-construction, not generic code browsing.'
  },
  {
    title: 'System design cheat sheet: rate limiting, caching, and queueing',
    category: 'HLD',
    difficulty: 'Intermediate',
    confidence: 91,
    evidence: 'Because you watched Java interview humor and system design content → we inferred a software-engineering identity beyond language memes → we recommend high-level design fundamentals.',
    why: 'You are not actually “Java-obsessed”; the signal is career resilience and building scalable systems, which is a stronger match for HLD.'
  },
  {
    title: 'DSA roadmap for backend interviews: arrays, hash maps, graphs',
    category: 'DSA',
    difficulty: 'Beginner',
    confidence: 87,
    evidence: 'Because you engaged with productivity and interview-coded content → we inferred career-focused technical growth → we recommend a structured DSA path.',
    why: 'The semantic intent is “become employable and strong at fundamentals,” which is a better fit than Java fandom or gear content.'
  },
  {
    title: 'How password hashing works: bcrypt vs PBKDF2 vs Argon2',
    category: 'Cybersecurity',
    difficulty: 'Advanced',
    confidence: 96,
    evidence: 'Because your strongest signal was password generation and security explainers → we inferred a real interest in cryptographic decisions → we recommend hash comparison learning.',
    why: 'This follows the exact pattern of high watch rate, repeated viewing, and saving on security content.'
  },
  {
    title: 'LLM internals explained: tokens, embeddings, and attention',
    category: 'AI',
    difficulty: 'Intermediate',
    confidence: 85,
    evidence: 'Because you consumed broad AI tool content but showed stronger depth in explainers → we inferred curiosity about real AI mechanics → we recommend a conceptual AI reel.',
    why: 'The system filters hype and surfaces deeper content that better matches your actual learning behavior.'
  }
];

const rejectedContent = [
  {
    title: '7 AI tools that make you rich in 30 days',
    reason: 'Rejected as shallow clickbait: high watch rate but very low save behavior and no evidence of depth, mechanism learning, or practical implementation.'
  },
  {
    title: 'Best gaming laptop for coding and streaming',
    reason: 'Rejected as lifestyle/hardware distraction: strong lifestyle signals, low save value, and no evidence of engineering deepening or technical learning.'
  },
  {
    title: 'Top 5 Java memes every developer understands',
    reason: 'Rejected because it is meme-only content. The semantic pattern points to software engineering interest, not Java loyalty or language worship.'
  }
];

function inferInterests() {
  const scores = {
    Cybersecurity: 0,
    HLD: 0,
    DSA: 0,
    AI: 0,
    Career: 0,
    Cloud: 0
  };

  sampleReels.forEach((reel) => {
    const weightedScore = reel.watch * 0.35 + reel.save * 1.9 + reel.rewatch * 1.3 + reel.like * 0.18 + reel.comment * 0.75;

    if (
      reel.pattern.includes('secure') ||
      reel.pattern.includes('security') ||
      reel.signal.includes('password') ||
      reel.signal.includes('login') ||
      reel.signal.includes('auth')
    ) {
      scores.Cybersecurity += weightedScore * 1.5;
    }

    if (
      reel.pattern.includes('system') ||
      reel.pattern.includes('design') ||
      reel.signal.includes('architecture') ||
      reel.signal.includes('scalable') ||
      reel.signal.includes('interview')
    ) {
      scores.HLD += weightedScore * 1.4;
    }

    if (
      reel.pattern.includes('career') ||
      reel.pattern.includes('lifestyle') ||
      reel.signal.includes('productivity') ||
      reel.signal.includes('interview')
    ) {
      scores.Career += weightedScore * 1.25;
    }

    if (
      reel.pattern.includes('deep') ||
      reel.signal.includes('mechanism') ||
      reel.signal.includes('attention') ||
      reel.signal.includes('embeddings')
    ) {
      scores.AI += weightedScore * 1.4;
    }

    if (reel.pattern.includes('auth') || reel.signal.includes('security')) {
      scores.Cloud += weightedScore * 0.7;
    }
  });

  return Object.entries(scores)
    .map(([name, score]) => ({ name, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function buildRecommendations(topInterests) {
  const primary = topInterests.map((item) => item.name);
  const picks = recommendationCatalog.filter((item) => primary.includes(item.category));

  return picks.slice(0, 3).map((item, index) => ({
    ...item,
    confidence: item.confidence,
    difficulty: item.difficulty,
    reasonLabel: primary[index] || item.category
  }));
}

function renderReelSignals() {
  const container = document.getElementById('reelSignalList');

  container.innerHTML = sampleReels
    .map((reel) => {
      const difficulty = getDifficulty(reel);
      const vibeClass =
        difficulty === 'Advanced'
          ? 'advanced'
          : difficulty === 'Beginner'
            ? 'beginner'
            : 'intermediate';

      return `
        <article class="reel-signal-card">
          <div class="signal-header">
            <div>
              <p class="signal-label">${reel.category}</p>
              <h4>${reel.title}</h4>
            </div>
            <span class="difficulty-tag ${vibeClass}">${difficulty}</span>
          </div>
          <div class="metrics-row">
            <span>Watch ${reel.watch}%</span>
            <span>Rewatch ${reel.rewatch}%</span>
            <span>Save ${reel.save}%</span>
            <span>Like ${reel.like}%</span>
            <span>Comment ${reel.comment}%</span>
          </div>
          <div class="signal-foot">
            <span>Inferred: ${reel.interest}</span>
            <span class="muted">${reel.signal}</span>
          </div>
        </article>
      `;
    })
    .join('');
}

function getDifficulty(reel) {
  if (reel.save >= 30 && reel.watch >= 70) return 'Advanced';
  if (reel.rewatch >= 30 && reel.watch < 70) return 'Beginner';
  return 'Intermediate';
}

function renderInterests(topInterests) {
  const container = document.getElementById('interestGrid');
  const maxScore = Math.max(...topInterests.map((item) => item.score));

  container.innerHTML = topInterests
    .map((item) => {
      const percentage = Math.round((item.score / maxScore) * 100);
      const width = Math.max(28, percentage);
      return `
        <article class="interest-card">
          <div class="top">
            <h4>${item.name}</h4>
            <span class="score-pill">${percentage}%</span>
          </div>
          <p class="muted">Semantic match based on saved, rewatched, and mechanism-focused engagement patterns.</p>
          <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
        </article>
      `;
    })
    .join('');
}

function renderRecommendations(recommendations) {
  const container = document.getElementById('recommendationList');

  container.innerHTML = recommendations
    .map(
      (item) => `
        <article class="rec-card">
          <div class="rec-top">
            <div class="rec-title">${item.title}</div>
            <span class="category-tag">${item.category}</span>
          </div>

          <div class="meta-row">
            <span class="meta-badge">Confidence: ${item.confidence}%</span>
            <span class="meta-badge">Difficulty: ${item.difficulty}</span>
          </div>

          <p class="reason">
            <strong>Because you engaged with</strong> password generation, secure login patterns, and interview-aware engineering content →
            <strong>we inferred</strong> a strong interest in secure systems and practical software engineering →
            <strong>we recommend</strong> ${item.title}.
          </p>
          <p class="addendum"><strong>Why this recommendation?</strong> ${item.why}</p>
        </article>
      `
    )
    .join('');
}

function renderRejected() {
  const container = document.getElementById('rejectedList');
  container.innerHTML = rejectedContent
    .map(
      (item) => `
        <div class="reject-item">
          <div class="reject-header">
            <span class="reject-title">${item.title}</span>
            <span class="badge accent">Rejected</span>
          </div>
          <div class="reject-reason">Rejected: ${item.title} — ${item.reason}</div>
        </div>
      `
    )
    .join('');
}

function renderInsights(topInterests) {
  const list = document.getElementById('insightList');
  const strongest = topInterests[0]?.name ?? 'Cybersecurity';
  const second = topInterests[1]?.name ?? 'HLD';
  const third = topInterests[2]?.name ?? 'DSA';

  list.innerHTML = `
    <li>Strongest evidence is in ${strongest}, driven by repeated viewing, saving, and replays of deep practical content.</li>
    <li>We reject shallow keyword matches and prioritize semantics: low save value and lifestyle-driven engagement are filtered out.</li>
    <li>${second} emerges as a supporting interest, especially when the user interacts with interview and architecture-heavy content.</li>
    <li>${third} is a foundational signal showing the user is gradually building a career-oriented engineering path rather than consuming meme-only material.</li>
  `;
}

function renderChart(topInterests) {
  const svg = document.getElementById('engagementChart');
  const colors = ['#69e3ff', '#7aa7ff', '#b48cff'];
  const chartData = topInterests.map((item, index) => ({
    label: item.name,
    value: Math.min(100, Math.round((item.score / Math.max(...topInterests.map((x) => x.score))) * 100)),
    color: colors[index % colors.length]
  }));

  const width = 540;
  const height = 240;
  const leftPad = 42;
  const bottomPad = 28;
  const chartHeight = height - bottomPad - 26;
  const maxVal = 100;

  const bars = chartData
    .map((item, idx) => {
      const x = leftPad + idx * 150 + 20;
      const barWidth = 82;
      const barHeight = (item.value / maxVal) * chartHeight;
      const y = height - bottomPad - barHeight;
      return `
        <g>
          <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="12" fill="${item.color}" opacity="0.9"></rect>
          <text x="${x + barWidth / 2}" y="${height - 8}" text-anchor="middle" fill="#aabed0" font-size="11">${item.label}</text>
          <text x="${x + barWidth / 2}" y="${y - 8}" text-anchor="middle" fill="#edf6ff" font-size="11">${item.value}%</text>
        </g>
      `;
    })
    .join('');

  svg.innerHTML = `
    ${bars}
  `;
}

function runAnalysis() {
  const topInterests = inferInterests();
  const recommendations = buildRecommendations(topInterests);

  renderReelSignals();
  renderInterests(topInterests);
  renderRecommendations(recommendations);
  renderRejected();
  renderInsights(topInterests);
  renderChart(topInterests);
}

document.getElementById('analyzeButton').addEventListener('click', () => {
  const button = document.getElementById('analyzeButton');
  button.textContent = 'Re-analyzing...';
  button.disabled = true;

  setTimeout(() => {
    runAnalysis();
    button.textContent = 'Analyze My Reels';
    button.disabled = false;
  }, 650);
});

runAnalysis();
