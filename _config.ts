import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
    location: new URL("https://careful-frog-27.deno.dev"),
    components: {
        variable: "components",
    },
});

site.copy("static", ".");

site.ignore("README.md");

site.use(metas());
site.use(postcss());

export default site;
