import {userAgent} from "../../tools/utils.js";
import {resolve, dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default async () => {
  const desktopUserAgent = await userAgent();

  return [
    {
      name: "github.com",
      url: "https://github.com/",
      file: resolve(__dirname, "../src/main.css"),
      fetchOpts: {headers: {"User-Agent": desktopUserAgent}},
      strict: true,
    },
    {
      name: "gist.github.com",
      url: "https://gist.github.com/",
      file: resolve(__dirname, "../src/gist.css"),
      fetchOpts: {headers: {"User-Agent": desktopUserAgent}},
      strict: true,
    },
    {
      name: "graphql.github.com",
      url: "https://graphql.github.com/", // https://developer.github.com/v4/explorer
      file: resolve(__dirname, "../src/graphql.css"),
      fetchOpts: {headers: {"User-Agent": desktopUserAgent}},
      strict: true,
    },
    {
      name: "support.github.com",
      url: "https://support.github.com/",
      file: resolve(__dirname, "../src/support.css"),
      fetchOpts: {headers: {"User-Agent": desktopUserAgent}},
      strict: true,
    },
    {
      name: "vscode-auth.github.com",
      url: "https://vscode-auth.github.com/",
      file: resolve(__dirname, "../src/vscode-auth.css"),
      fetchOpts: {headers: {"User-Agent": desktopUserAgent}},
      strict: true,
    },
    {
      name: "githubstatus.com",
      url: "https://www.githubstatus.com/",
      file: resolve(__dirname, "../src/status.css"),
      fetchOpts: {headers: {"User-Agent": desktopUserAgent}},
      strict: true,
    },
    {
      name: "render.githubusercontent.com",
      url: [
        "https://render.githubusercontent.com/view/pdf?enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f74706e2f706466732f623037326638386234633836303762343561303866386236393331633037313630623462316466382f41253230436f75727365253230696e2532304d616368696e652532304c6561726e696e672532302863696d6c2d76305f392d616c6c292e706466",
        "https://render.githubusercontent.com/diff/img?commit=0fabf58a4b0a00d048d06113a063738afb674ed7&enc_url1=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f5374796c6973685468656d65732f4769744875622d4461726b2f306661626635386134623061303064303438643036313133613036333733386166623637346564372f696d616765732f73637265656e73686f74732f6265666f72652e706e67&enc_url2=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f5374796c6973685468656d65732f4769744875622d4461726b2f613434323536373337663932303861633263393435613266633561633133666562343536336262332f696d616765732f73637265656e73686f74732f6265666f72652e706e67",
        "https://render.githubusercontent.com/view/ipynb?enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f69707974686f6e2f6970796e622f326631353236613434373130346437643762393765326138616236366265653864326461393061642f74657374732f707572655f6970796e622f666f6f2e6970796e62"
      ],
      file: resolve(__dirname, "../src/render.css"),
      fetchOpts: {headers: {"User-Agent": desktopUserAgent}},
      strict: true,
    },
    {
      name: "refined-github",
      crx: "hlepfoohegkhhmjieoechaddaejaokhf",
      prefix: `html.refined-github`,
      match: ["html", ".refined-github"],
      contentScriptsOnly: true,
      file: resolve(__dirname, "../src/extensions.css"),
      fetchOpts: {headers: {"User-Agent": desktopUserAgent}},
    },
    {
      name: "zenhub",
      crx: "ogcgkffhplmphkaahpmffcafajaocjbd",
      prefix: `html[class*="zh-"]`,
      match: [
        "html",
        `[class*="zh-"]`,
        ".zh-app--dark",
        ".zh-app--light",
        ".zh-app--visible",
        ".zh-app--fixed-layout",
      ],
      file: resolve(__dirname, "../src/extensions.css"),
      fetchOpts: {headers: {"User-Agent": desktopUserAgent}},
    },
    // disabled because extension was taken down by Google
    // {
    //   name: "github-hovercard",
    //   crx: "mmoahbbnojgkclgceahhakhnccimnplk",
    //   prefix: `html[class*="ghh-"]`,
    //   match: ["html", ".ghh-theme-"],
    //   file: resolve(__dirname, "../src/extensions.css"),
    //   fetchOpts: {headers: {"User-Agent": desktopUserAgent}},
    // },
    {
      name: "gitako",
      crx: "giljefjcheohhamkjphiebfjnlphnokk",
      prefix: `body.gitako-ready`,
      match: ["body", ".gitako-ready"],
      file: resolve(__dirname, "../src/extensions.css"),
      fetchOpts: {headers: {"User-Agent": desktopUserAgent}},
    },
    // disabled because of crx errors
    // {
    //   name: "npmhub",
    //   crx: "kbbbjimdjbjclaebffknlabpogocablj",
    //   file: resolve(__dirname, "../src/extensions.css"),
    //   fetchOpts: {headers: {"User-Agent": desktopUserAgent}},
    // },
    {
      name: "notifications-preview",
      crx: "kgilejfahkjidpaclkepbdoeioeohfmj",
      contentScriptsOnly: true,
      prefix: `html:root`,
      match: ["html", ":root", "[data-color-mode=dark]"],
      file: resolve(__dirname, "../src/extensions.css"),
      fetchOpts: {headers: {"User-Agent": desktopUserAgent}},
    },
    {
      name: "octotree",
      crx: "bkhaagjahfmjljalopjnoealnfndnagc",
      contentScriptsOnly: true,
      prefix: `.octotree-sidebar`,
      match: [".octotree-sidebar"],
      file: resolve(__dirname, "../src/extensions.css"),
      fetchOpts: {headers: {"User-Agent": desktopUserAgent}},
    },
  ];
};
