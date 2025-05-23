﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Learnify.Repository.Migrations
{
    /// <inheritdoc />
    public partial class pendingMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Courses_Users_ProfessorId",
                table: "Courses");

            migrationBuilder.AlterColumn<Guid>(
                name: "ProfessorId",
                table: "Courses",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_Users_ProfessorId",
                table: "Courses",
                column: "ProfessorId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Courses_Users_ProfessorId",
                table: "Courses");

            migrationBuilder.AlterColumn<Guid>(
                name: "ProfessorId",
                table: "Courses",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_Users_ProfessorId",
                table: "Courses",
                column: "ProfessorId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
