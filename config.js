/**配置文件 */

var host = "dlut-elab.com/hcq/dlut-bit"

var config = {
  host,
  GetUseUrl:`https://${host}/getuse.php`,

  GetOpenidUrl:`https://${host}/getopenid.php`,

  RecruitmentUrl:`https://${host}/recruitment.php`,

  ProjectApplyUrl: `https://${host}/projectapply.php`,

  FeedbackUrl:`https://${host}/feedback.php`,

  GetProjectUrl: `https://${host}/getproject.php`,
  GetFeedbackUrl: `https://${host}/getfeedback.php`,
  GetRecruitmentUrl: `https://${host}/getrecruitment.php`,
  FinishProjectUrl:`https://${host}/finishproject.php`,
  PassProjectUrl: `https://${host}/passproject.php`,
}
module.exports = config;