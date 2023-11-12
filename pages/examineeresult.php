<?php
$examId = $_GET['id'];
$selExam = $conn->query("SELECT * FROM exam_tbl WHERE ex_id='$examId'")->fetch(PDO::FETCH_ASSOC);
?>

<style>
    .chatbot-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
}

i {
  /* Your icon styles */
}

.text-message {
  margin-left: 10px; /* Adjust the margin to control the distance between the icon and text */
  /* Additional styles for the text message */
}

</style>

<link rel="stylesheet" type="text/css" href="css/mycss.css">
<div class="app-main__outer">
    <div class="app-main__inner">
        <div class="app-page-title">
            <div class="page-title-wrapper">
                <div class="page-title-heading">
                    <!-- <div>EXAMINEE RESULT</div> -->
                </div>
            </div>
        </div>

        <div class="col-md-12">
            <div class="main-card mb-3 card">
                <div class="card-header">Ratings on the Career Advice Consultation Exam</div>
                <div class="table-responsive">
                    <table class="align-middle mb-0 table table-borderless table-striped table-hover" id="tableList">
                        <thead>
                            <tr>
                                <th>Scores</th>
                                <th>Ratings</th>
                                <th>Subject</th>
                                <th>Course Recommendation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $selScore = $conn->query("SELECT * FROM exam_question_tbl eqt INNER JOIN exam_answers ea ON eqt.eqt_id = ea.quest_id AND eqt.exam_answer = ea.exans_answer  WHERE ea.axmne_id='$exmneId' AND ea.exam_id='$examId' AND ea.exans_status='new' ");
                            $score = $selScore->rowCount();
                            $over = $selExam['ex_questlimit_display'];
                            $formattedAns = number_format(($score / $over * 100), 2);
                            $subject = "Please Contact"; // Default subject

                            if ($formattedAns >= 1.00 && $formattedAns <= 20.00) {
                                $subject = "Logic";

                            } elseif ($formattedAns >= 20.00 && $formattedAns <= 40.00) {
                                $subject = "Numerical";

                            } elseif ($formattedAns >= 40.00 && $formattedAns <= 60.00) {
                                $subject = "Grammar and Reading Comprehension";

                            } elseif ($formattedAns >= 60.00 && $formattedAns <= 80.00) {
                                $subject = "Clinical";

                            } elseif ($formattedAns >= 80.00 && $formattedAns <= 100.00) {
                                $subject = "Communications Skills";
                            }


                            $courseRecommendation = "Please Contact the";

                            if ($formattedAns >= 1.00 && $formattedAns <= 20.00) {
                                $courseRecommendation = "Bachelor of Science in Computer Science (BSCS), ".
                                " Bachelor of Science in Information Technology (BSIT)";

                            } elseif ($formattedAns >= 20.00 && $formattedAns <= 40.00) {
                                $courseRecommendation = "Bachelor of Science in Architecture (BSA), ".
                                "Bachelor of Science in Engineering (BSE)";

                            } elseif ($formattedAns >= 40.00 && $formattedAns <= 60.00) {
                                $courseRecommendation = "Bachelor of Elementary Education (BEE), ".
                                "Bachelor of Secondary Education (BSE) ";

                            } elseif ($formattedAns >= 60.00 && $formattedAns <= 80.00) {
                                $courseRecommendation = "Bachelor of Science in Nursing (BSN), ".
                                " Bachelor of Science in Pharmacy (BSP)";

                            } elseif ($formattedAns >= 80.00 && $formattedAns <= 100.00) {
                                $courseRecommendation = "Bachelor of Science in Tourism Management (BSTM),".
                                "Bachelor of Science in Hospitality Management (BSHM)";
                            } 
                            ?>

                            <th><?php echo $score . " / " . $over; ?></th>
                            <th><?php echo $formattedAns . "%"; ?></th>
                            <th><?php echo $subject; ?></th>
                            <th><?php echo $courseRecommendation; ?></th>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="chatbot-icon">
            <a href="./chatbot/index.php">
                <i class='fas fa-comment' style='font-size:48px;color: #FF7377'></i>
            </a>
            <div class="text-message">Your Text Message Here</div>
        </div>
    </div>
</div>
