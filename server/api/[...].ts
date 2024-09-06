import { createRouter, useBase } from '#imports';
import seo from "./seo";

const router = createRouter();
router.use("/seo/**", seo);

export default useBase('/api', router.handler);
