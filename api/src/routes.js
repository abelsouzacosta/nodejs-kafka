import { Router } from 'express';

const router = Router();

router.post('/certifications', (req, res) => {
  console.log(req.producer);

  return res.json({
    ok: true,
  });
});

export default router;
