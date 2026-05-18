const feeds = {
  title: "Frontpage Sample Feeds",
  description:
    "Curated feeds for the 'Try as Guest' experience and development testing. Includes edge cases documented in data/README.md.",
  generated: "2026-02-12",
  categories: [
    {
      name: "Frontend",
      feeds: [
        {
          title: "CSS-Tricks",
          feedUrl: "https://css-tricks.com/feed/",
          siteUrl: "https://css-tricks.com/",
          description:
            "Tips, Tricks, and Techniques on using Cascading Style Sheets.",
          format: "rss2",
        },
        {
          title: "Smashing Magazine",
          feedUrl: "https://www.smashingmagazine.com/feed/",
          siteUrl: "https://www.smashingmagazine.com/",
          description: "For web designers and developers.",
          format: "rss2",
        },
        {
          title: "Josh W. Comeau",
          feedUrl: "https://www.joshwcomeau.com/rss.xml",
          siteUrl: "https://www.joshwcomeau.com/",
          description: "Friendly tutorials for developers.",
          format: "rss2",
        },
        {
          title: "Kent C. Dodds",
          feedUrl: "https://kentcdodds.com/blog/rss.xml",
          siteUrl: "https://kentcdodds.com/",
          description:
            "Helping people make the world a better place through quality software.",
          format: "rss2",
        },
        {
          title: "web.dev",
          feedUrl: "https://web.dev/feed.xml",
          siteUrl: "https://web.dev/",
          description: "Building a better web, together.",
          format: "atom",
          notes: "Atom format feed",
        },
        {
          title: "MDN Blog",
          feedUrl: "https://developer.mozilla.org/en-US/blog/rss.xml",
          siteUrl: "https://developer.mozilla.org/en-US/blog/",
          description: "The MDN Web Docs blog.",
          format: "rss2",
        },
      ],
    },
    {
      name: "Design",
      feeds: [
        {
          title: "Sidebar.io",
          feedUrl: "https://sidebar.io/feed.xml",
          siteUrl: "https://sidebar.io/",
          description: "The five best design links, every day.",
          format: "atom",
          notes: "High frequency — posts daily",
        },
        {
          title: "Nielsen Norman Group",
          feedUrl: "https://www.nngroup.com/feed/rss/",
          siteUrl: "https://www.nngroup.com/",
          description:
            "Evidence-based user experience research, training, and consulting.",
          format: "rss2",
        },
        {
          title: "Figma Blog",
          feedUrl: "https://www.figma.com/blog/feed/",
          siteUrl: "https://www.figma.com/blog/",
          description:
            "Stories about how products are designed at Figma and beyond.",
          format: "rss2",
        },
        {
          title: "A List Apart",
          feedUrl: "https://alistapart.com/main/feed/",
          siteUrl: "https://alistapart.com/",
          description: "For people who make websites.",
          format: "rss2",
          notes: "Infrequent publishing — may appear stale",
        },
        {
          title: "UX Collective",
          feedUrl: "https://uxdesign.cc/feed",
          siteUrl: "https://uxdesign.cc/",
          description:
            "Curated stories on user experience, usability, and product design.",
          format: "rss2",
          notes: "Medium-based feed — may contain Medium-specific markup",
        },
      ],
    },
    {
      name: "Backend & DevOps",
      feeds: [
        {
          title: "Cloudflare Blog",
          feedUrl: "https://blog.cloudflare.com/rss/",
          siteUrl: "https://blog.cloudflare.com/",
          description: "The Cloudflare Blog.",
          format: "rss2",
          notes: "Rich HTML content with images and code blocks",
        },
        {
          title: "Vercel Blog",
          feedUrl: "https://vercel.com/atom",
          siteUrl: "https://vercel.com/blog",
          description: "Updates from Vercel.",
          format: "atom",
          notes: "Atom format — test Atom parsing alongside RSS",
        },
        {
          title: "The GitHub Blog",
          feedUrl: "https://github.blog/feed/",
          siteUrl: "https://github.blog/",
          description: "Updates, ideas, and inspiration from GitHub.",
          format: "rss2",
        },
        {
          title: "Netlify Blog",
          feedUrl: "https://www.netlify.com/blog/index.xml",
          siteUrl: "https://www.netlify.com/blog/",
          description: "News and posts from Netlify.",
          format: "rss2",
        },
      ],
    },
    {
      name: "General Tech",
      feeds: [
        {
          title: "The Pragmatic Engineer",
          feedUrl: "https://blog.pragmaticengineer.com/rss/",
          siteUrl: "https://blog.pragmaticengineer.com/",
          description: "Observations across the software engineering industry.",
          format: "rss2",
          notes: "Some items may be paywalled — feed provides excerpt only",
        },
        {
          title: "Hacker News Best",
          feedUrl: "https://hnrss.org/best",
          siteUrl: "https://news.ycombinator.com/",
          description: "Best stories on Hacker News.",
          format: "rss2",
          notes:
            "Very high volume — 100+ items. Good for testing pagination/virtualization. Descriptions often contain HTML.",
        },
      ],
    },
    {
      name: "AI & ML",
      feeds: [
        {
          title: "Simon Willison's Weblog",
          feedUrl: "https://simonwillison.net/atom/everything/",
          siteUrl: "https://simonwillison.net/",
          description:
            "Simon Willison's weblog, covering AI, Python, and web development.",
          format: "atom",
          notes:
            "Atom format with full HTML content. Very prolific — many items.",
        },
        {
          title: "Hugging Face Blog",
          feedUrl: "https://huggingface.co/blog/feed.xml",
          siteUrl: "https://huggingface.co/blog",
          description: "The latest news from Hugging Face.",
          format: "atom",
        },
      ],
    },
  ],
  edgeCases: [
    {
      title: "Defunct Tech Blog (dead feed)",
      feedUrl: "https://example.com/this-feed-does-not-exist.xml",
      siteUrl: "https://example.com/",
      description: "Intentionally dead URL for testing error handling.",
      format: "unknown",
      edgeCase: "dead_url",
    },
    {
      title: "Duplicate — Simon Willison",
      feedUrl: "https://simonwillison.net/atom/everything/",
      siteUrl: "https://simonwillison.net/",
      description: "Duplicate of the Simon Willison feed in the AI category.",
      format: "atom",
      edgeCase: "duplicate",
    },
  ],
};

const sideTabsContainer = document.getElementById("side-tabs");

function showTabs() {
  feeds.categories.forEach((category) => {
    const tab = document.createElement("div");
    tab.className = "side-tab";
    const feedListItem = category.feeds
      .map(
        (feed) =>
          `<li> <a class="side-tab-link" href="${feed.siteUrl}" target="_blank"> <span> ${feed.title.charAt(0)} </span> ${feed.title}</a></li>`,
      )
      .join("");

    tab.innerHTML = `
        <button class="tab-button" data-cat-name="${category.name}"> ${category.name} - ${category.feeds.length} </button>
        <ul>
            ${feedListItem}
        </ul>
    `;
    sideTabsContainer.appendChild(tab);
  });
}

showTabs();

//    <div class = "side-tab">  <button class="tab-button">Design - 6 </button> </div>
const mainArticlesContainer = document.querySelector(".articles");

function showAllItems(articles) {
  articles.forEach((cat) => {
    const category = document.createElement("h2");
    category.textContent = cat.name;
    mainArticlesContainer.appendChild(category);

    cat.feeds.forEach((feed) => {
      const articleItem = document.createElement("div");
      articleItem.className = "article-item";
      articleItem.innerHTML = `
              <a href="${feed.feedUrl}" target="_blank">
                  <h3>${feed.title}</h3>
                  <p>${feed.description}</p>
                <span class="format-flag"> ${feed.format} </span>
              </a>
            `;
      mainArticlesContainer.appendChild(articleItem);
    });
  });
}

showAllItems(feeds.categories);

function makeTabButtonsClickable() {
  const tabButtons = document.querySelectorAll(".tab-button");

  tabButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const catName = e.target.getAttribute("data-cat-name"); // get the catename of the button clicked
      const filteredCategory = feeds.categories.find(
        (cat) => cat.name === catName,
      ); // find the category object that matches the catName

      mainArticlesContainer.innerHTML = ""; // clear the main articles container
      showAllItems([filteredCategory]); // show only the items of the filtered category
    });
  });
}
makeTabButtonsClickable();
