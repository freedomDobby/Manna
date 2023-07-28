-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema manna
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema manna
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `manna` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `manna` ;

-- -----------------------------------------------------
-- Table `manna`.`member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`member` (
  `id` VARCHAR(20) NOT NULL,
  `pwd` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `gender` VARCHAR(20) NOT NULL,
  `role` VARCHAR(20) NOT NULL,
  `refresh_token` VARCHAR(256) NOT NULL,
  `created_date` DATETIME NOT NULL,
  `last_modified_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`meeting`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`meeting` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `host` VARCHAR(20) NOT NULL,
  `game` VARCHAR(30) NOT NULL,
  `is_open_profile` TINYINT NOT NULL,
  `level` INT NOT NULL,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`meeting_member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`meeting_member` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `member_id` VARCHAR(20) NOT NULL,
  `meeting_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_meeting_member_member_idx` (`member_id` ASC) VISIBLE,
  INDEX `fk_meeting_member_meeting1_idx` (`meeting_id` ASC) VISIBLE,
  CONSTRAINT `fk_meeting_member_member_id`
    FOREIGN KEY (`member_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_meeting_member_meeting_id`
    FOREIGN KEY (`meeting_id`)
    REFERENCES `manna`.`meeting` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`game_love_stick`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`game_love_stick` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `meeting_id` INT NOT NULL,
  `receiver` VARCHAR(20) NOT NULL,
  `sender` VARCHAR(20) NOT NULL,
  `created_time` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_game_love_stick_meeting1_idx` (`meeting_id` ASC) VISIBLE,
  CONSTRAINT `fk_game_love_stick_meeting_id`
    FOREIGN KEY (`meeting_id`)
    REFERENCES `manna`.`meeting` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`profile_picture`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`profile_picture` (
  `member_id` VARCHAR(20) NOT NULL,
  `path` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `priority` INT NOT NULL,
  `created_date` DATETIME NOT NULL,
  `last_modified_date` DATETIME NOT NULL,
  PRIMARY KEY (`member_id`),
  CONSTRAINT `fk_profile_picture_member_id`
    FOREIGN KEY (`member_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`message_room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`message_room` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `member_id` VARCHAR(20) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  `head_message` VARCHAR(255) NOT NULL,
  `created_date` DATETIME NOT NULL,
  `last_modified_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`, `member_id`),
  INDEX `fk_message_room_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_message_room_member_id`
    FOREIGN KEY (`member_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`message`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT NOT NULL,
  `date` DATETIME NOT NULL,
  `is_read` TINYINT NOT NULL,
  `message_room_id` INT NOT NULL,
  `sender_id` VARCHAR(20) NOT NULL,
  `receiver_id` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`, `is_read`),
  INDEX `fk_message_message_room1_idx` (`message_room_id` ASC) VISIBLE,
  INDEX `fk_message_member1_idx` (`sender_id` ASC) VISIBLE,
  INDEX `fk_message_member2_idx` (`receiver_id` ASC) VISIBLE,
  CONSTRAINT `fk_message_message_room_id`
    FOREIGN KEY (`message_room_id`)
    REFERENCES `manna`.`message_room` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_message_sender_id`
    FOREIGN KEY (`sender_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_message_receiver_id`
    FOREIGN KEY (`receiver_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`note`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`note` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sender_id` VARCHAR(20) NOT NULL,
  `receiver_id` VARCHAR(20) NOT NULL,
  `subject` VARCHAR(100) NOT NULL,
  `content` TEXT NOT NULL,
  `date` DATETIME NOT NULL,
  `is_sogae` TINYINT NOT NULL,
  `is_check` TINYINT NOT NULL,
  `is_reject` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_note_member1_idx` (`sender_id` ASC) VISIBLE,
  INDEX `fk_note_member2_idx` (`receiver_id` ASC) VISIBLE,
  CONSTRAINT `fk_note_member1`
    FOREIGN KEY (`sender_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_note_member2`
    FOREIGN KEY (`receiver_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`sido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`sido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`gugun`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`gugun` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sido_id` INT NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_gugun_sido1_idx` (`sido_id` ASC) VISIBLE,
  CONSTRAINT `fk_gugun_sido_id`
    FOREIGN KEY (`sido_id`)
    REFERENCES `manna`.`sido` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sido_id` INT NOT NULL,
  `gugun_id` INT NOT NULL,
  `detail` VARCHAR(100) NOT NULL,
  `latitude` DECIMAL(20,17) NOT NULL,
  `longitude` DECIMAL(20,17) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_address_sido1_idx` (`sido_id` ASC) VISIBLE,
  INDEX `fk_address_gugun1_idx` (`gugun_id` ASC) VISIBLE,
  CONSTRAINT `fk_address_sido_id`
    FOREIGN KEY (`sido_id`)
    REFERENCES `manna`.`sido` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_address_gugun_id`
    FOREIGN KEY (`gugun_id`)
    REFERENCES `manna`.`gugun` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`member_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`member_address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address_id` INT NOT NULL,
  `created_date` DATETIME NOT NULL,
  `last_modified_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_member_address_address1_idx` (`address_id` ASC) VISIBLE,
  CONSTRAINT `fk_member_address_address_id`
    FOREIGN KEY (`address_id`)
    REFERENCES `manna`.`address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`member_detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`member_detail` (
  `id` VARCHAR(20) NOT NULL,
  `address_member_id` INT NOT NULL,
  `tel` VARCHAR(100) NOT NULL,
  `birth` VARCHAR(100) NOT NULL,
  `email_id` VARCHAR(20) NOT NULL,
  `email_domain` VARCHAR(20) NOT NULL,
  `height` INT NOT NULL,
  `job` VARCHAR(20) NOT NULL,
  `is_smoker` TINYINT NOT NULL,
  `is_drinker` TINYINT NOT NULL,
  `mbti` VARCHAR(4) NOT NULL,
  `introduction` TEXT NOT NULL,
  `is_blocking_friend` TINYINT NOT NULL,
  `mileage` INT NOT NULL,
  `created_date` DATETIME NOT NULL,
  `last_modified_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_member_detail_member_address1_idx` (`address_member_id` ASC) VISIBLE,
  CONSTRAINT `fk_member_detail_id`
    FOREIGN KEY (`id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_member_detail_address_member_id`
    FOREIGN KEY (`address_member_id`)
    REFERENCES `manna`.`member_address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`reserve_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`reserve_address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address_id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `role` VARCHAR(20) NOT NULL,
  `advertisement_cost` INT NULL DEFAULT 0,
  `advertisement_start_date` DATETIME NULL,
  `advertisement_end_date` DATETIME NULL,
  `created_date` DATETIME NOT NULL,
  `last_modified_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_table1_address1_idx` (`address_id` ASC) VISIBLE,
  CONSTRAINT `fk_table1_address_id`
    FOREIGN KEY (`address_id`)
    REFERENCES `manna`.`address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`schedule`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`schedule` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `member_id` VARCHAR(20) NOT NULL,
  `opponent_id` VARCHAR(20) NOT NULL,
  `date` DATETIME NOT NULL,
  PRIMARY KEY (`id`, `member_id`),
  INDEX `fk_schedule_member1_idx` (`member_id` ASC) VISIBLE,
  INDEX `fk_schedule_member1_idx1` (`opponent_id` ASC) VISIBLE,
  CONSTRAINT `fk_schedule_member_id`
    FOREIGN KEY (`member_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_schedule_opponent_id`
    FOREIGN KEY (`opponent_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`offline_schedule`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`offline_schedule` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `schedule_id` INT NOT NULL,
  `reserve_address_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_offline_schedule_schedule1_idx` (`schedule_id` ASC) VISIBLE,
  INDEX `fk_offline_schedule_reserve_address1_idx` (`reserve_address_id` ASC) VISIBLE,
  CONSTRAINT `fk_offline_schedule_schedule_id`
    FOREIGN KEY (`schedule_id`)
    REFERENCES `manna`.`schedule` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_offline_schedule_reserve_address_id`
    FOREIGN KEY (`reserve_address_id`)
    REFERENCES `manna`.`reserve_address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`online_schedule`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`online_schedule` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `schedule_id` INT NOT NULL,
  `url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_online_schedule_schedule1_idx` (`schedule_id` ASC) VISIBLE,
  CONSTRAINT `fk_online_schedule_schedule_id`
    FOREIGN KEY (`schedule_id`)
    REFERENCES `manna`.`schedule` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`mileage_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`mileage_history` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `member_id` VARCHAR(20) NOT NULL,
  `cost` INT NOT NULL,
  `context` VARCHAR(100) NOT NULL,
  `created_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_mileage_history_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_mileage_history_member_id`
    FOREIGN KEY (`member_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`friend`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`friend` (
  `id` INT NOT NULL,
  `member_id` VARCHAR(20) NOT NULL,
  `friend_id` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_friend_member1_idx` (`member_id` ASC) VISIBLE,
  INDEX `fk_friend_member2_idx` (`friend_id` ASC) VISIBLE,
  CONSTRAINT `fk_friend_member_id`
    FOREIGN KEY (`member_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_friend_friend_id`
    FOREIGN KEY (`friend_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`ban`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`ban` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `member_id` VARCHAR(20) NOT NULL,
  `opponent_id` VARCHAR(20) NOT NULL,
  `context` TEXT NULL,
  `code` VARCHAR(10) NOT NULL,
  `created_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ban_member1_idx` (`member_id` ASC) VISIBLE,
  INDEX `fk_ban_member2_idx` (`opponent_id` ASC) VISIBLE,
  CONSTRAINT `fk_ban_member_id`
    FOREIGN KEY (`member_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ban_opponent_id`
    FOREIGN KEY (`opponent_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`alarm`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`alarm` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `receiver_id` VARCHAR(20) NOT NULL,
  `content` VARCHAR(45) NOT NULL,
  `code` VARCHAR(10) NOT NULL,
  `created_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_alarm_member1_idx` (`receiver_id` ASC) VISIBLE,
  CONSTRAINT `fk_alarm_receiver_id`
    FOREIGN KEY (`receiver_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`sogaeting`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`sogaeting` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `male_id` VARCHAR(20) NOT NULL,
  `female_id` VARCHAR(20) NOT NULL,
  `is_success` TINYINT NOT NULL,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sogaeting_member1_idx` (`male_id` ASC) VISIBLE,
  INDEX `fk_sogaeting_member2_idx` (`female_id` ASC) VISIBLE,
  CONSTRAINT `fk_sogaeting_male_id`
    FOREIGN KEY (`male_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sogaeting_female_id`
    FOREIGN KEY (`female_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`mission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`mission` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sogaeting_id` INT NOT NULL,
  `is_succeess` TINYINT NOT NULL,
  `is_done` TINYINT NOT NULL,
  `male_id` VARCHAR(20) NOT NULL,
  `femail_id` VARCHAR(20) NOT NULL,
  `male_image_path` VARCHAR(255) NULL,
  `male_image_name` VARCHAR(255) NULL,
  `female_image_path` VARCHAR(255) NULL,
  `female_image_name` VARCHAR(255) NULL,
  `star_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_mission_sogaeting1_idx` (`sogaeting_id` ASC) VISIBLE,
  CONSTRAINT `fk_mission_sogaeting_id`
    FOREIGN KEY (`sogaeting_id`)
    REFERENCES `manna`.`sogaeting` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`mission_question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`mission_question` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `mission_id` INT NOT NULL,
  `no` INT NOT NULL,
  `male_is_done` TINYINT NOT NULL,
  `female_is_done` TINYINT NOT NULL,
  `code` VARCHAR(10) NOT NULL,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_mission_quest_mission1_idx` (`mission_id` ASC) VISIBLE,
  CONSTRAINT `fk_mission_quest_mission_id`
    FOREIGN KEY (`mission_id`)
    REFERENCES `manna`.`mission` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`sogaeting_continue`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`sogaeting_continue` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `member_id` VARCHAR(20) NOT NULL,
  `sogaeting_id` INT NOT NULL,
  `extend_date` DATETIME NOT NULL,
  `created_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sogaeting_continue_member1_idx` (`member_id` ASC) VISIBLE,
  INDEX `fk_sogaeting_continue_sogaeting1_idx` (`sogaeting_id` ASC) VISIBLE,
  CONSTRAINT `fk_sogaeting_continue_member_id`
    FOREIGN KEY (`member_id`)
    REFERENCES `manna`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sogaeting_continue_sogaeting_id`
    FOREIGN KEY (`sogaeting_id`)
    REFERENCES `manna`.`sogaeting` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`code`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`code` (
  `id` VARCHAR(2) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`code_detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`code_detail` (
  `id` VARCHAR(10) NOT NULL,
  `code_id` VARCHAR(2) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_code_detail_code1_idx` (`code_id` ASC) VISIBLE,
  CONSTRAINT `fk_code_detail_code_id`
    FOREIGN KEY (`code_id`)
    REFERENCES `manna`.`code` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `manna`.`balance_game`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `manna`.`balance_game` (
  `question` VARCHAR(100) NOT NULL,
  `level` INT NOT NULL,
  PRIMARY KEY (`question`, `level`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
